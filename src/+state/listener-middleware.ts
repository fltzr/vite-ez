import {
  TypedAddListener,
  TypedStartListening,
  addListener,
  createListenerMiddleware,
} from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;
export type AppListenerFn = (listener: AppStartListening) => void;

export const startAppListening = listenerMiddleware.startListening as AppStartListening;
export const addAppListener = addListener as TypedAddListener<RootState, AppDispatch>;

export function combineListeners(listeners: AppListenerFn[]) {
  listeners.forEach((listenerFn) => listenerFn(startAppListening));
}
