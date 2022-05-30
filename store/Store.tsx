import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import apiReducer from '@store/reducers/ApiReducer.tsx';
import moviesReducer from '@store/reducers/reducers.tsx';

const appReducers = combineReducers({
  apiReducer,
  moviesReducer,
});

const rootReducer = (state, action) => appReducers(state, action);

const logger = createLogger();

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
