//import storage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import type {Storage as StorageType} from 'redux-persist';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {MMKV} from 'react-native-mmkv';
import reducer from './reducer';

const storage = new MMKV();

const reduxStorage: StorageType = {
  setItem: (key: string, value: any) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    storage.delete(key);
    return Promise.resolve();
  },
};
// #region Redux config
const persistConfig: {
  key: string;
  storage: StorageType;
  blacklist: Array<string>;
} = {
  key: 'root',
  storage: reduxStorage,
  blacklist: ['appState'],
};
// #endregion

// #region Redux Store
const REDUX = () => {
  const persistedReducer = persistReducer(persistConfig, reducer);
  const Store = //createStore(persistedReducer, applyMiddleware(thunk));
    configureStore({
      reducer: persistedReducer,
      middleware: [thunk],
    });
  const Persistor = persistStore(Store);
  return {Store, Persistor};
};
const ReduxProvider = REDUX();
// #endregion
export default ReduxProvider;

export type ReduxDispatchArguments = {
  type: string;
  payload?: any;
};
