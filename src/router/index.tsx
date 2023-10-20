import { AppContainer } from '@/app/app-container';
import { RouteObject } from 'react-router-dom';

export const routes: RouteObject[] = [
  {
    element: <AppContainer />,
    children: [
      {
        path: '/',
        element: <div>Home</div>,
      },
      {
        path: '/app',
        element: <div>About</div>,
        children: [
          {
            path: 'dashboard',
            element: <div>Dashboard</div>,
          },
          {
            path: 'settings',
            element: <div>Settings</div>,
          },
        ],
      },
    ],
  },
];