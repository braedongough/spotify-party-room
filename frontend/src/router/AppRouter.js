import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import LoginPage from '../login/LoginPage';
import App from '../App';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute
          path="/login"
          component={() => {
            window.location = 'http://localhost:8888/login';
            return null;
          }}
        />

        <PrivateRoute path="/dashboard" component={App} />
      </Switch>
    </>
  </Router>
);

export default AppRouter;
