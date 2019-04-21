import React from 'react';
import spotify, { getToken } from './api/spotifyWebApi';
import useLogin from './login/useLogin';
import { socket } from './api/socket';

import Search from './search/Search';
import LoginPage from './login/LoginPage';

const App = () => {
  const token = getToken();
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

export default App;
