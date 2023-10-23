import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { layoutReducer } from '@/features/layout/layout-slice';
import { listenerMiddleware } from './listener-middleware';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
  devTools: !import.meta.env.PROD,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().prepend([listenerMiddleware.middleware, logger]);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
