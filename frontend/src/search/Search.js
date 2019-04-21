import React, { useState } from 'react';
import debounce from 'lodash.debounce';
import spotify, { loadNextQuery } from '../api/spotifyWebApi';
import SearchForm from './SearchForm';
import TrackList from './TrackList';

const Search = ({ token }) => {
  const [tracks, setTracks] = useState([]);
  const [nextQuery, setNextQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = debounce(async (query = '') => {
    if (query) {
      setLoading(true);
      const search = await spotify.searchTracks(query, { limit: 10 });

      setNextQuery(search.tracks.next);
      setTracks([...search.tracks.items]);
      setLoading(false);
    } else {
      setTracks([]);
    }
  }, 200);
  const handleChange = e => {
    const query = e.target.value;
    handleSearch(query);
  };

  const onLoadMore = async () => {
    setLoading(true);

    const response = await loadNextQuery(token, nextQuery);
    const { items, next } = response.data.tracks;

    setTracks(tracks.concat(items));

    setNextQuery(next);
    setLoading(false);
  };

  return (
    <>
      <SearchForm handleChange={handleChange} />
      <TrackList tracks={tracks} onLoadMore={onLoadMore} loading={loading} />
    </>
  );
};

export default Search;
