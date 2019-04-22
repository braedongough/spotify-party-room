import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import initSocket from './api/socket';
import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

initSocket(() => {
  ReactDOM.render(<App />, document.getElementById('root'));
});
