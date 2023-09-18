import { configureStore } from '@reduxjs/toolkit';
import { combinedReducers } from './combineReducer';
import logger from 'redux-logger';
import {persistStore, persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const isDevelopment = process.env.NODE_ENV==='development'

const persistConfig = {
    key: 'userApp',
    storage,
    timeout: null,
    whitelist: ['contact', 'login'],
}

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
     }), isDevelopment ? logger : null],

});

export const persistedStore = persistStore(store);
