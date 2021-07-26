import React from 'react';
import PropTypes from 'prop-types';
import Option from './Options';
import {
  dietValues, healthValues, cuisineValues, dishValues, mealValues,
} from '../assets/logic/filters';

const SearchField = (props) => {
  const {
    filters, link, filterHandler, submitHandler, clear,
  } = props;

  const handleFilter = (e) => {
    const filter = e.target.id;
    const defaults = ['Diet', 'Health', 'Cuisine', 'Dish', 'Meal'];
    const value = defaults.includes(e.target.value) ? '' : e.target.value;
    filterHandler(filter, value);
  };

  const handleSubmit = () => {
    submitHandler();
  };

  const handleClear = () => {
    clear();
  };

  const mapOptions = (values) => {
    const options = values.map((option) => <option key={option}>{option}</option>);
    return options;
  };

  const dietOptions = mapOptions(dietValues);
  const healthOptions = mapOptions(healthValues);
  const cuisineOptions = mapOptions(cuisineValues);
  const dishOptions = mapOptions(dishValues);
  const mealOptions = mapOptions(mealValues);

  return (
    <div>
      <div
        onChange={(e) => handleFilter(e)}
      >
        <input
          id="q"
          type="text"
          placeholder="Enter ingredients and cooking equipment to search for a recipe including them"
          value={filters.q}
        />
        <div>
          <Option id="dietLabels" options={dietOptions} value={filters.dietLabels} />
          <Option id="healthLabels" options={healthOptions} value={filters.healthLabels} />
          <Option id="cuisineType" options={cuisineOptions} value={filters.cuisineType} />
          <Option id="dishType" options={dishOptions} value={filters.dishType} />
          <Option id="mealType" options={mealOptions} value={filters.mealType} />
        </div>
        <a href={link} type="button" onClick={handleSubmit}>Click to Search</a>
        <button id="clear" type="button" onClick={handleClear}>Clear All</button>
      </div>
    </div>
  );
};

SearchField.propTypes = {
  link: PropTypes.string,
  filterHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func,
  clear: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    q: PropTypes.string.isRequired,
    dietLabels: PropTypes.string.isRequired,
    healthLabels: PropTypes.string.isRequired,
    cuisineType: PropTypes.string.isRequired,
    dishType: PropTypes.string.isRequired,
    mealType: PropTypes.string.isRequired,

  }).isRequired,
};

SearchField.defaultProps = {
  link: '#search',
  submitHandler: () => {},
};

export default SearchField;
