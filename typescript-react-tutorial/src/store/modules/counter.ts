import { ActionType, action, getType, createAction } from "typesafe-actions";
import { Reducer } from "react";

export enum CounterActionTypes {
  INCREMENT = "counter/INCREMENT",
  DECREMENT = "counter/DECREMENT"
}

export const actionCreators = {
  increment: createAction(CounterActionTypes.INCREMENT),
  decrement: createAction(CounterActionTypes.DECREMENT)
};

type CounterAction = ActionType<typeof actionCreators>;

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};

export default (state: CounterState = initialState, action: CounterAction) => {
  switch (action.type) {
    case getType(actionCreators.increment):
      return {
        value: state.value + 1
      };
    case getType(actionCreators.decrement):
      return {
        value: state.value - 1
      };
    default:
      return state;
  }
};
