import React from 'react';
import { connect } from 'react-redux';
import { setToken as setTokenAction } from './redux/modules/auth';
import spotify, { getToken } from './api/spotifyWebApi';
import useLogin from './login/useLogin';
import LoginPage from './login/LoginPage';
import { socket } from './api/socket';
import Search from './search/Search';

const App = ({ setToken }) => {
  const token = getToken();
  setToken(token);
  const loggedIn = useLogin(token);
  if (loggedIn) {
    spotify.getMe().then(res => {
      socket().emit('userJoined', res);
    });
  }

  socket().on('usersUpdated', userArray => {
    //console.log(userArray);
  });
  return loggedIn ? <Search token={token} /> : <LoginPage />;
};

const mapDispatchToProps = dispatch => ({
  setToken: token => dispatch(setTokenAction(token)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(App);
