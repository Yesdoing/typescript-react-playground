import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';
import { TodoState, todoReducer as todos } from './todos';

export interface StoreState {
    counter: CounterState;
    todos: TodoState;
}

export default combineReducers<StoreState>({
    counter,
    todos
});