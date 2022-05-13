import {combineReducers} from '@reduxjs/toolkit';
import appState from './appReducer';
import userState from './userReducer';
const rootReducer = combineReducers({
  appState,
  userState,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
