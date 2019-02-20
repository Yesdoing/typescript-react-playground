import { createAction, handleActions } from 'redux-actions';
import { ReducersMapObject } from 'redux'; 
import { Reducer } from 'react';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const actionCreators = {
  increment: createAction(INCREMENT),
  decrement: createAction(DECREMENT),
};

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0
};


export default handleActions<CounterState, string>(
    {
      [INCREMENT]: (state, action) => ({ value: state.value + 1 }),
      [DECREMENT]: (state, action) => ({ value: state.value - 1 }),
    }, 
    initialState
);