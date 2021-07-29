import actions from '../actions/index';

const { CHANGE_MEAL } = actions;

const mealReducer = (meal = [], action) => {
  switch (action.type) {
    case CHANGE_MEAL: {
      return action.meal;
    }
    default: return meal;
  }
};

export default mealReducer;
