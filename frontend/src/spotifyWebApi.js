import SpotifyWebApi from "spotify-web-api-js";
import axios from "axios";

export const getHashParams = () => {
  var hashParams = {};
  var e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
  e = r.exec(q);
  while (e) {
    hashParams[e[1]] = decodeURIComponent(e[2]);
    e = r.exec(q);
  }
  return hashParams;
};

export const getUser = async token => {
  const response = await axios.get("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  return response.data;
};

const spotifyApi = new SpotifyWebApi();

export default spotifyApi;
