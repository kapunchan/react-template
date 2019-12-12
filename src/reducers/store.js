import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './index';

export default (initialState = {}) => {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunk)));

  if (module.hot) {
    module.hot.accept('./index', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};
