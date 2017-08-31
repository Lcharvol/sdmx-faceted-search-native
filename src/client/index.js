import React from 'react';
import App from './components/App';
import configureStore from './store';
import { Provider } from 'react-redux';
import { loadConfig } from './actions/config';

const initialState = {
};

const store = configureStore(initialState);

store.dispatch(loadConfig());

const Root = () => (
  <Provider store={store}>
    <App/>
  </Provider>
);

export default Root;