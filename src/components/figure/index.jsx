import React from 'react';
import PropTypes from 'prop-types';

const Figure = ({ className, children }) => {
  return (
    <figure className={className}>
      {children}
    </figure>
  )
}

Figure.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
};

export default Figure;

