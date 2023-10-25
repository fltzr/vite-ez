import { describe, beforeEach, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RootState } from '@/+state/store';
import { BreadcrumbGroupProps } from '@cloudscape-design/components/breadcrumb-group';
import { Mode as Theme, Density } from '@cloudscape-design/global-styles';
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
import configureStore from 'redux-mock-store';
import { Shell } from '../components';
import { Provider } from 'react-redux';
import { Layout } from '..';

const mockStore = configureStore([]);
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

describe('feature-layout', () => {
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

  describe('ui', () => {
    test('toggles navigation on navigation change', () => {
      const store = mockStore(state);

      const r = render(
        <Provider store={store}>
          <Layout>
            <div>Test</div>
          </Layout>
        </Provider>
      );

      const navigation = screen.getByRole('navigation', {
        name: 'Navigation drawer',
        hidden: true,
      });
      expect(navigation).not.toBeVisible();

      store.dispatch(setNavigationOpen(true));
      expect(navigation).toBeVisible();
    });
  });
});
