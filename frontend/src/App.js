import React from 'react';
import { connect } from 'react-redux';
import { setToken } from './redux/modules/auth';
import spotify, { getToken } from './api/spotifyWebApi';
import { socket } from './api/socket';
import Search from './search/Search';

const App = ({ poopoo }) => {
  const token = getToken();
  poopoo(token);
  // if (loggedIn) {
  //   spotify.getMe().then(res => {
  //     socket().emit('userJoined', res);
  //   });
  // }

  socket().on('usersUpdated', userArray => {
    //console.log(userArray);
  });
  return <Search token={token} />;
};

const mapDispatchToProps = dispatch => ({
  poopoo: token => dispatch(setToken(token)),
});

export default connect(
  undefined,
  mapDispatchToProps
)(App);
