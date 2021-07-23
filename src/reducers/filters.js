import actions from '../actions/index';

const { CHANGE_FILTER, CLEAR_FILTER } = actions;

const filterReducer = (filterState = {}, action) => {
  switch (action.type) {
    case CHANGE_FILTER: {
      const userFilters = {
        ...filterState,
      };
      userFilters[action.filter] = action.value;
      return userFilters;
    }
    case CLEAR_FILTER: {
      return {
        q: '',
        dietLabels: '',
        healthLabels: '',
        cuisineType: '',
        dishType: '',
        mealType: '',
      };
    }
    default: return filterState;
  }
};

export default filterReducer;
