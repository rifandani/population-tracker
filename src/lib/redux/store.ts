import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, Dispatch, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
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
// files
import counterReducer from './slices/counter';

// PersistConfig<RootState>
const rootPersistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  // default === persist all state
  whitelist: ['counter'], // only persist counter state
};

const rootReducer = combineReducers({
  // counter: persistReducer(rootPersistConfig, counterReducer),
  counter: counterReducer,
});

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = (): Dispatch => useDispatch<AppDispatch>();

export const persistor = persistStore(store);
export default store;
