import {configureStore,combineReducers} from '@reduxjs/toolkit';

import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  import { PersistGate } from "redux-persist/integration/react";


import userReducer from './userSlice';
import videoReducer from './videoSlice';


const rootReducer = combineReducers({ user: userReducer, video: videoReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };

export const store = configureStore({
    reducer : {
        persistedReducer,
        middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    }
})

export const persistor = persistStore(store);