import { combineReducers } from 'redux';
import counter, { CounterState } from './counter';

export default combineReducers<CounterState>({
  counter
} as any);

// 스토어의 상태 타입 정의
export interface StoreState {
  counter: CounterState;
}