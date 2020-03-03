import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import middleware, { history, sagaMiddleware } from './middleware';
import { firebaseReducer as firebase } from 'react-redux-firebase';
import {
  cryptoTable,
  rtl,
  sidebar,
  user,
  newOrderTable,
  todo,
  theme,
  invoices
} from './reducers';

import appSagas from './app/appSagas';

const reducers = {
  router: connectRouter(history),
  form,
  theme,
  todo,
  newOrderTable,
  user,
  firebase,
  sidebar,
  rtl,
  cryptoTable,
  invoices
};

const store = createStore(combineReducers(reducers), {}, middleware);
sagaMiddleware.run(appSagas);
export default store;
