import React from 'react';
import { Formik } from 'formik';
import { Input } from 'antd';

const Search = Input.Search;

const SearchForm = ({ handleChange }) => {
  return (
    <Formik
      initialValues={{ searchQuery: '', test: '' }}
      render={({ values, setFieldValue }) => (
        <form>
          <Search
            allowClear
            style={{ width: 200, margin: 30 }}
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
