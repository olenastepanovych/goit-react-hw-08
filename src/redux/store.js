import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import authReducer from './auth/slice';
import contactsReducer from './contacts/slice';
import filterReducer from './filters/slice';

const authPersistConfig = {
key: 'auth',
storage,
whitelist: ['token'],
};

const rootReducer = combineReducers({
auth: persistReducer(authPersistConfig, authReducer),
contacts: contactsReducer,
filter: filterReducer,
});

export const store = configureStore({
reducer: rootReducer,
middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});

export const persistor = persistStore(store);