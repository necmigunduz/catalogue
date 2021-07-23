import { combineReducers } from 'redux';
import filterReducer from './filters';
import mealReducer from './meal';
import mealsReducer from './meals';

const rootReducer = combineReducers(
  {
    filterReducer,
    mealReducer,
    mealsReducer,
  },
);

export default rootReducer;
