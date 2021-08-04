import { combineReducers } from 'redux';
import { roomsReducer } from './rooms';

export const rootReducer = combineReducers({
  rooms: roomsReducer,
});
