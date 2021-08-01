import React from 'react';
import PropTypes from 'prop-types';

const UnorderedList = ({ children }) => {
  return (
    <ul className="card-group justify-content-between pt-5">
      {children}
    </ul>
  )
};

UnorderedList.propTypes = {
  children: PropTypes.array.isRequired,
};

export default UnorderedList;

