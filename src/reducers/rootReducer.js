import { combineReducers } from 'redux';
import filterReducer from './filtersReducer';
import mealReducer from './meal';
import mealsReducer from './meals';

const rootReducer = combineReducers(
  {
    filters: filterReducer,
    meal: mealReducer,
    meals: mealsReducer,
  },
);

export default rootReducer;
