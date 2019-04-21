import { useEffect, useState } from 'react';
import spotifyApi from '../api/spotifyWebApi';

const useLogin = token => {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (token) {
      spotifyApi.setAccessToken(token);
      setLoggedIn(true);
    }
  }, [token]);
  return loggedIn;
};

export default useLogin;
