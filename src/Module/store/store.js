import { createStore, applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  combineReducers,
  composeWithDevTools(applyMiddleware())
);

export default store;
