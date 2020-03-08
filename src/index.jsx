import React from 'react';
import { render } from 'react-dom';
import App from './containers/App/App';
import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://b63c97ced3cc4b1ba294493a307f96a6@sentry.io/4023162'
});

render(<App />, document.getElementById('root'));
