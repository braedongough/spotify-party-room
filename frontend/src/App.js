import React, { useState, useEffect } from "react";
import spotifyApi, { getHashParams, getUser } from "./spotifyWebApi";
import { socket } from "./socket";

// * USER is currently emitting from socket
// todo: display array of connected users
// ? can we get the user data from server side??

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const token = getHashParams().access_token;

  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);
      setLoggedIn(true);
      getUser(token).then(user => {
        socket().emit("userJoined", user);
      });
    }
  }, [token]);
  socket().on("usersUpdated", userArray => {
    console.log(userArray);
  });
  return (
    <>
      <p>Login to spotify</p>
      {loggedIn ? (
        <p>logged in</p>
      ) : (
        <a href="http://localhost:8888/login">Login Button</a>
      )}
    </>
  );
};

export default App;
