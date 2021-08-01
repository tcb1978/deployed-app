import React from 'react';
import PropTypes from 'prop-types';

const FlexRow = ({ children }) => {
  return (
    <div className="flex-row">
      {children}
    </div>
  )
};

FlexRow.propTypes = {
  children: PropTypes.array.isRequired,
};

export default FlexRow;

