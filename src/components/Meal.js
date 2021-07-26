import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/css-lib/borders.css';
import '../assets/styles/css-lib/colors.css';
import '../assets/styles/css-lib/positioning.css';
import '../assets/styles/css-lib/fonts.css';

const Meal = (props) => {
  const {
    id, title, image, diet, health, cuisine, dish, meal,
  } = props;

  const dishList = dish.map((d) => <li className="dishlist" key={`${title}${d}`}>{d}</li>);
  const cuisineInfo = cuisine || 'Universal';

  return (
    <div className="meal">
      <div className="flx jsc-between bord-1 pad-10 bg-73">
        <div className="flx column">
          <a href={`/recipe/${id}`} target="_blank" rel="noreferrer" className="courgette-font title">{title}</a>
          <small className="ing color-white">(Click on the title above to see more!)</small>
        </div>
        <div><img className="image" src={image} alt="" /></div>
      </div>
      <div className="pad-10 bord-1 pad-30 foodinfo">
        <h3 className="fw-600 fs-20">Cuisine:</h3>
        <p className="cuisine">{cuisineInfo}</p>
        <h3 className="fw-600 fs-20">Diet Information:</h3>
        <p className="diet">{diet}</p>
        <h3 className="fw-600 fs-20">Health Related Information:</h3>
        <p className="health">{health}</p>
        <h3 className="fw-600 fs-20">Dish Type:</h3>
        <ul>
          {dishList}
        </ul>
        <h3 className="fw-600 fs-20">Suggested for:</h3>
        <p className="suggested">{meal}</p>
      </div>
    </div>
  );
};

Meal.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cuisine: PropTypes.string,
  diet: PropTypes.arrayOf(PropTypes.string.isRequired),
  health: PropTypes.arrayOf(PropTypes.string.isRequired),
  dish: PropTypes.arrayOf(PropTypes.string.isRequired),
  meal: PropTypes.arrayOf(PropTypes.string.isRequired),
};

Meal.defaultProps = {
  diet: [],
  health: [],
  cuisine: 'Universal',
  dish: [],
  meal: ['for anytime during a day'],
};

export default Meal;
