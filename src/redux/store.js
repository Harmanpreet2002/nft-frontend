import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import reducers from "./reducers";
/** after combined and configure persist to use storage in browser */
const persistConfig = { key: 'root', storage };
/** configure a store with all the parametres like reducer, devTools, middleware */
const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
});

export {
  store
};