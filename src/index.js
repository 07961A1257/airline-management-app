import React from 'react';
// scroll bar
import 'simplebar/src/simplebar.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

import store from './redux/configureStore';
import { Provider } from 'react-redux';
import ErrorBoundaryComponent from './ErrorBoundaryComponent';
// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <HelmetProvider>
    <ErrorBoundaryComponent>
      <Provider store={store()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ErrorBoundaryComponent>
  </HelmetProvider>
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

reportWebVitals();
