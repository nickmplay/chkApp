import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import checklistReducer from '../reducers/checklists';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer, 
      checklists: checklistReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
