import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';

import { AppContainer } from './app/app-container';

import './index.css';
import '@cloudscape-design/global-styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
);
