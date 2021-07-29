const FETCH_MEALS = 'FETCH_MEALS';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CHANGE_MEAL = 'CHANGE_MEAL';
const CLEAR_FILTER = 'CLEAR_FILTER';

const actions = {
  FETCH_MEALS, CHANGE_FILTER, CHANGE_MEAL, CLEAR_FILTER,
};

const fetchMeals = (meals) => (
  {
    type: FETCH_MEALS,
    meals,
  }
);

const changeFilter = (filter, value) => (
  {
    type: CHANGE_FILTER,
    filter,
    value,
  }
);

const changeMeal = (meal) => (
  {
    type: CHANGE_MEAL,
    meal,
  }
);

const clearFilter = () => (
  {
    type: CLEAR_FILTER,
  }
);

export default actions;

export {
  fetchMeals, changeFilter, changeMeal, clearFilter,
};
