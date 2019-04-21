import SpotifyWebApi from 'spotify-web-api-js';

export const getToken = () => {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  e = r.exec(q);
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }
  return hashParams.access_token;
};

const spotifyApi = new SpotifyWebApi();

export default spotifyApi;
