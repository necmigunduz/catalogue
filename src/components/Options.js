import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/css-lib/borders.css';
import '../assets/styles/css-lib/colors.css';
import '../assets/styles/css-lib/positioning.css';
import '../assets/styles/css-lib/fonts.css';

const Option = (props) => {
  const { id, options } = props;

  return (
    <div className="pad-10">
      <select id={id}>{options}</select>
      <div />
    </div>
  );
};

Option.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired,
};

export default Option;
