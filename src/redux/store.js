import {applyMiddleware, createStore, compose} from 'redux';
import * as reduxLoop from 'redux-loop-symbol-ponyfill';
import middleware from './middleware';
import reducer from './reducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancers = [
  applyMiddleware(...middleware),
  reduxLoop.install()
];

/* Enable redux dev tools only in development.
 * We suggest using the standalone React Native Debugger extension:
 * https://github.com/jhen0409/react-native-debugger
 */
/* eslint-disable no-undef */
const composeEnhancers = (__DEV__ && composeWithDevTools) || compose;
/* eslint-enable no-undef */

const enhancer = composeEnhancers(...enhancers);

// create the store
const store = createStore(
  reducer,
  null,
  enhancer
);

export default store;
