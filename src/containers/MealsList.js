import { useEffect } from 'react';
import PropTypes from 'prop-types';
import getData from '../assets/logic/FetchData';
import Meal from '../components/Meal';
import SearchField from '../components/Search';

const MealsList = (props) => {
  const {
    meals, filters, fetchMeals, changeFilter, clearFilters,
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
    clearFilters();
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
        cuisine={meal.cuisine}
        dish={meal.dishType}
        meal={meal.mealType}
        key={meal.id}
      />
    ));
  } else {
    listOfMeals = <p>You can search recipes by entering ingredients here!</p>;
  }

  return (
    <>
      <SearchField
        filters={filters}
        filterHandler={handleFilter}
        submitHandler={handleSubmit}
        clear={handleClear}
      />
      <div>
        {listOfMeals}
      </div>
    </>
  );
};

MealsList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  filters: PropTypes.shape({
    q: PropTypes.string.isRequired,
    cuisineType: PropTypes.string.isRequired,
  }).isRequired,
  fetchMeals: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  clearFilters: PropTypes.func.isRequired,
};

export default MealsList;
