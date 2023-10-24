import { RootState, store } from '@/+state/store';
import { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group';
import { SideNavigationProps } from '@cloudscape-design/components/side-navigation';
import {
  Mode as Theme,
  Density,
  applyMode as applyTheme,
  applyDensity,
} from '@cloudscape-design/global-styles';
import { PayloadAction } from '@reduxjs/toolkit';
import {
  layoutReducer,
  selectActiveHref,
  selectDensity,
  selectNavigationHidden,
  selectNavigationOpen,
  selectTheme,
  selectToolsHidden,
  selectToolsOpen,
  setBreadcrumbs,
  setDensity,
  setNavigationHidden,
  setNavigationOpen,
  setActiveHref,
  setTheme,
  setToolsHidden,
  setToolsOpen,
  LayoutState,
} from '@/features/layout/layout-slice';
import { save } from '@/common/utils';
import { addAppListener } from '@/+state/listener-middleware';

const state: RootState = {
  layout: {
    theme: Theme.Light,
    density: Density.Comfortable,
    activeHref: '/home',
    pageTitle: 'Home',
    breadcrumbs: [
      { text: 'Home', href: '/home' },
      { text: 'About', href: '/about' },
    ],
    navigationItems: [],
    navigationOpen: true,
    navigationHidden: false,
    toolsOpen: false,
    toolsHidden: true,
  },
};

describe('layoutSlice', () => {
  let initialState: LayoutState;

  beforeEach(() => {
    initialState = {
      theme: Theme.Light,
      density: Density.Comfortable,
      activeHref: '',
      pageTitle: undefined,
      breadcrumbs: [],
      navigationItems: [],
      navigationOpen: false,
      navigationHidden: false,
      toolsOpen: false,
      toolsHidden: false,
    };
  });

  describe('reducers', () => {
    test('should handle setTheme', () => {
      const action: PayloadAction<Theme> = { type: setTheme.type, payload: Theme.Dark };
      const state = layoutReducer(initialState, action);
      expect(state.theme).toEqual(Theme.Dark);
    });

    test('should handle setDensity', () => {
      const action: PayloadAction<Density> = { type: setDensity.type, payload: Density.Compact };
      const state = layoutReducer(initialState, action);
      expect(state.density).toEqual(Density.Compact);
    });

    test('should handle setActiveHref', () => {
      const action: PayloadAction<string> = { type: setActiveHref.type, payload: '/home' };
      const state = layoutReducer(initialState, action);
      expect(state.activeHref).toEqual('/home');
    });

    test('should handle setBreadcrumbs', () => {
      const breadcrumbs: BreadcrumbGroupProps.Item[] = [
        { text: 'Home', href: '/home' },
        { text: 'About', href: '/about' },
      ];
      const action: PayloadAction<BreadcrumbGroupProps.Item[]> = {
        type: setBreadcrumbs.type,
        payload: breadcrumbs,
      };
      const state = layoutReducer(initialState, action);
      expect(state.breadcrumbs).toEqual(breadcrumbs);
    });

    test('should handle setNavigationOpen', () => {
      const action: PayloadAction<boolean> = { type: setNavigationOpen.type, payload: true };
      const state = layoutReducer(initialState, action);
      expect(state.navigationOpen).toEqual(true);
    });

    test('should handle setNavigationHidden', () => {
      const action: PayloadAction<boolean> = { type: setNavigationHidden.type, payload: true };
      const state = layoutReducer(initialState, action);
      expect(state.navigationHidden).toEqual(true);
    });

    test('should handle setToolsOpen', () => {
      const action: PayloadAction<boolean> = { type: setToolsOpen.type, payload: true };
      const state = layoutReducer(initialState, action);
      expect(state.toolsOpen).toEqual(true);
    });

    test('should handle setToolsHidden', () => {
      const action: PayloadAction<boolean> = { type: setToolsHidden.type, payload: true };
      const state = layoutReducer(initialState, action);
      expect(state.toolsHidden).toEqual(true);
    });
  });

  describe('selectors', () => {
    test('should select the theme', () => {
      const selected = selectTheme(state);
      expect(selected).toEqual(Theme.Light);
    });

    test('should select the density', () => {
      const selected = selectDensity(state);
      expect(selected).toEqual(Density.Comfortable);
    });

    test('should select the activeHref', () => {
      const selected = selectActiveHref(state);
      expect(selected).toEqual('/home');
    });

    test('should select the navigationHidden', () => {
      const selected = selectNavigationHidden(state);
      expect(selected).toEqual(false);
    });

    test('should select the navigationOpen', () => {
      const selected = selectNavigationOpen(state);
      expect(selected).toEqual(true);
    });

    test('should select the toolsHidden', () => {
      const selected = selectToolsHidden(state);
      expect(selected).toEqual(true);
    });

    test('should select the toolsOpen', () => {
      const selected = selectToolsOpen(state);
      expect(selected).toEqual(false);
    });
  });
});

describe('listener', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should apply the theme on setTheme', () => {
    const getStateSpy = jest.spyOn(store, 'getState');
    getStateSpy.mockReturnValueOnce({ layout: { ...state.layout, theme: Theme.Dark } });

    const applyThemeSpy = jest.spyOn(applyTheme, 'mockImplementation');
    const saveSpy = jest.spyOn(save, 'mockImplementation');

    const action = setTheme(Theme.Light);
    const api = { getState: getStateSpy, dispatch: jest.fn() };

    const listener = addAppListener(action.type, action.payload, action.meta, action.error, action);

    listener.effect(listener, api);

    expect(applyThemeSpy).toHaveBeenCalledWith(Theme.Light);
    expect(saveSpy).toHaveBeenCalledWith('theme', Theme.Light);
    expect(api.dispatch).toHaveBeenCalledWith(action);
  });

  it('should apply the density on setDensity', () => {
    const getStateSpy = jest.spyOn(store, 'getState');
    getStateSpy.mockReturnValueOnce({ layout: { ...state.layout, density: Density.Compact } });

    const applyDensitySpy = jest.spyOn(applyDensity, 'mockImplementation');
    const saveSpy = jest.spyOn(save, 'mockImplementation');

    const action = setDensity(Density.Comfortable);
    const api = { getState: getStateSpy, dispatch: jest.fn() };

    const listener = addAppListener(action.type, action.payload, action.meta, action.error, action);

    listener.effect(listener, api);

    expect(applyDensitySpy).toHaveBeenCalledWith(Density.Comfortable);
    expect(saveSpy).toHaveBeenCalledWith('theme', Density.Comfortable);
    expect(api.dispatch).toHaveBeenCalledWith(action);
  });
});
