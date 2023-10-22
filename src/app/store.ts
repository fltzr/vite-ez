import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { layoutReducer } from '@/features/layout/layout-slice';

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
	middleware(getDefaultMiddleware) {
		return getDefaultMiddleware().concat(logger);
	}
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
