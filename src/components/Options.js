import React from 'react';
import PropTypes from 'prop-types';

const Option = (props) => {
  const { id, options, value } = props;

  return (
    <div>
      <select id={id} value={value}>{options}</select>
      <div />
    </div>
  );
};

Option.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
  value: PropTypes.string.isRequired,
};

export default Option;
