import React from 'react';
import { Formik } from 'formik';
import debounce from 'lodash.debounce';
import spotify from '../api/spotifyWebApi';

const Search = () => {
  const handleSearch = debounce(async (query = '') => {
    const search = await spotify.searchTracks(query, { limit: 10 });
    console.log(search);
  }, 2000);
  const handleChange = e => {
    const query = e.target.value;
    handleSearch(query);
  };

  return (
    <Formik
      initialValues={{ searchQuery: '', test: '' }}
      render={({ values, setFieldValue }) => (
        <form>
          <input
            name="searchQuery"
            type="text"
            value={values.searchQuery}
            onChange={e => {
              setFieldValue('searchQuery', e.target.value);
              handleChange(e);
            }}
            placeholder="search spotify"
          />
        </form>
      )}
    />
  );
};

export default Search;
