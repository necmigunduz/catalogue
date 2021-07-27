import { useEffect } from 'react';
import PropTypes from 'prop-types';
import getData from '../assets/logic/FetchData';
import Meal from '../components/Meal';
import SearchField from '../components/Search';
import '../assets/styles/css-lib/borders.css';
import '../assets/styles/css-lib/colors.css';
import '../assets/styles/css-lib/positioning.css';
import '../assets/styles/css-lib/fonts.css';

const MealsList = (props) => {
  const {
    meals, filters, fetchMeals, changeFilter, clearFilter,
  } = props;

  const setMeals = async (ingredient, cuisine, from, to) => {
    const mealsArray = await getData(ingredient, cuisine, from, to);
    fetchMeals(mealsArray);
  };

  const handleFilter = (filter, value) => {
    changeFilter(filter, value);
  };

  const handleSubmit = () => {
    setMeals(filters, 0, 99);
  };

  const handleClear = () => {
    clearFilter();
  };

  useEffect(() => {
    setMeals(filters, 0, 99);
  }, []);

  let listOfMeals;
  if (meals.length > 0) {
    listOfMeals = meals.map((meal) => (
      <Meal
        id={meal.id}
        title={meal.title}
        image={meal.image}
        diet={meal.diet}
        health={meal.health}
        cuisine={meal.cuisine}
        dish={meal.dishType}
        meal={meal.mealType}
        key={meal.id}
      />
    ));
  } else {
    listOfMeals = <p className="m-30">No recipe found!</p>;
  }

  return (
    <>
      <div>
        <SearchField
          filters={filters}
          filterHandler={handleFilter}
          submitHandler={handleSubmit}
          clear={handleClear}
        />
        <div className="listOfMeals">
          <h3 className="fs-20 fw-400 bord-1 pad-20 bg-55 color-white">Search Results</h3>
          {listOfMeals}
        </div>
      </div>
    </>
  );
};

MealsList.propTypes = {
  fetchMeals: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({
    q: PropTypes.string,
    cuisineType: PropTypes.string,
  }),
};

MealsList.defaultProps = {
  filters: PropTypes.shape({
    q: '',
    cuisineType: 'indian',
  }),
};

export default MealsList;
