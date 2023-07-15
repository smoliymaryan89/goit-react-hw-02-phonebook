import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
