import React from 'react';
import PropTypes from 'prop-types';

const Meal = (props) => {
  const {
    id, title, image, cuisine, dish, meal,
  } = props;

  const dishList = dish.map((d) => <li key={`${title}${d}`}>{d}</li>);
  const cuisineInfo = cuisine || 'Universal';

  return (
    <div className="menu">
      <a className="title" href={`/recipe/${id}`}>{title}</a>
      <div><img className="image" src={image} alt="" /></div>
      <p>{`Cuisine: ${cuisineInfo}`}</p>
      <ul>
        {dishList}
      </ul>
      <p>{`Suggested for: ${meal}`}</p>
    </div>
  );
};

Meal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cuisine: PropTypes.string,
  dish: PropTypes.arrayOf(PropTypes.string.isRequired),
  meal: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Meal.defaultProps = {
  cuisine: 'Universal',
  dish: [],
  meal: ['for anytime during a day'],
};

export default Meal;