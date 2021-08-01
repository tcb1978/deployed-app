import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children }) => {
  return (
    <li
      className="d-flex align-items-stretch"
      style={{
        border: 'none',
        listStyle: 'none',
        maxWidth: 'max-content',
      }}>
      {children}
    </li>
  )
};

ListItem.propTypes = {
  children: PropTypes.object.isRequired,
};

export default ListItem;

