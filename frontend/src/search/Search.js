import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import spotify from '../api/spotifyWebApi';
import SearchForm from './SearchForm';
import TrackList from './TrackList';

const Search = () => {
  const [tracks, setTracks] = useState([]);
  const handleSearch = debounce(async (query = '') => {
    if (query) {
      const search = await spotify.searchTracks(query, { limit: 10 });

      setTracks([...search.tracks.items]);
    } else {
      setTracks([]);
    }
  }, 200);
  const handleChange = e => {
    const query = e.target.value;
    handleSearch(query);
  };
  console.log(tracks);
  return (
    <>
      <SearchForm handleChange={handleChange} />
      <TrackList tracks={tracks} />
    </>
  );
};

export default Search;
