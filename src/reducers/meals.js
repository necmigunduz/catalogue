import actions from '../actions/index';

const { FETCH_MEALS } = actions;

const mealsReducer = (mealState = [], action) => {
  switch (action.type) {
    case FETCH_MEALS: {
      return action.meals;
    }
    default: return mealState;
  }
};

export default mealsReducer;
