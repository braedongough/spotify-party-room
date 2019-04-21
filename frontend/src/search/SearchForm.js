import React from 'react';
import { Formik } from 'formik';

const SearchForm = ({ handleChange }) => {
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

export default SearchForm;
