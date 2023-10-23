import { setDensity, setTheme } from './layout-slice';
import {
  applyMode as applyTheme,
  applyDensity,
  Mode as Theme,
  Density,
} from '@cloudscape-design/global-styles';
import { save } from '@/common/utils';
import { addAppListener, startAppListening } from '@/+state/listener-middleware';
import { store } from '@/+state/store';

startAppListening({
  type: 'layout/setTheme',
  effect: (_, api) => {
    console.log('[startAppListening] Theme');
    applyTheme(api.getState().layout.theme);
    save<Theme>('theme', api.getState().layout.theme);
    api.dispatch(setTheme(api.getState().layout.theme));
  },
});

startAppListening({
  type: 'layout/setDensity',
  effect: (_, api) => {
    console.log('[startAppListening] Density');
    applyDensity(api.getState().layout.density);
    save<Density>('theme', api.getState().layout.density);
    // api.dispatch(setTheme(action.payload));
  },
});
