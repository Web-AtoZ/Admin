import { combineReducers } from 'redux';
import Counter from './Counter';
import Waiting from './Waiting';

// redux의 내장함수인 combineReducers로 리듀서를 하나로 합치는 작업을 함.
// 여러개로 나뉘어진 리듀서 : 서브리듀서
// 하나로 합쳐진 리듀서 : 루트 리듀서
export default combineReducers({
   Counter,
   Waiting,
});