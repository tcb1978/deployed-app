import React from 'react';
import PropTypes from 'prop-types';

const Select = ({ selectedAuthor, handleSelectChange, sortedCollection }) => {
  return (
    <div className="col-xs-12 col-md-4 pt-5">
      <select
        className="form-select form-select-lg"
        value={selectedAuthor}
        onChange={handleSelectChange}
        aria-label="select by author"
      >
        <option defaultValue>Select By Author</option>
        {sortedCollection.map(item => (
          <option value={item.author} key={item.id}>{item.author}</option>
        ))}
      </select>
    </div>
  )
};

Select.propTypes = {
  selectedAuthor: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  sortedCollection: PropTypes.array.isRequired,
};

export default Select;

