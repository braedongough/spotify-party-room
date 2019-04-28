import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import './index.css';
import initSocket from './api/socket';
import App from './App';

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

initSocket(() => {
  ReactDOM.render(<Main />, document.getElementById('root'));
});
