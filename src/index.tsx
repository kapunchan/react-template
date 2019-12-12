import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { getUserInfo } from 'actions/account';
import App from 'containers/App';
import createStore from 'reducers/store';
import * as serviceWorker from './serviceWorker';

const store = createStore();

const init = () => {
  const root = (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );

  ReactDOM.render(root, document.getElementById('root') as HTMLDivElement);

  serviceWorker.unregister();
};

store.dispatch(getUserInfo(init));
