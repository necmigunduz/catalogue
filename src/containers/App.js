import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealsList from './MealsList';
import FoodsInfo from './FoodsInfo';
import {
  fetchMeals, changeFilter, changeMeal, clearFilter,
} from '../actions/index';
import storage from '../assets/logic/localStorage';

function App(props) {
  const {
    meals, filters, meal, fetchMeals, changeFilter, changeMeal, clearFilter,
  } = props;

  const handleClear = () => {
    clearFilter();
  };

  useEffect(() => {
    storage.save(filters);
  }, [filters]);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MealsList
              meals={meals}
              filters={filters}
              changeFilter={changeFilter}
              fetchMeals={fetchMeals}
              clearFilter={handleClear}
            />
          )}
        />
        <Route
          path="/recipe"
          render={() => (
            <FoodsInfo
              meal={meal}
              filters={filters}
              fetchMeals={fetchMeals}
              changeFilter={changeFilter}
              changeMeal={changeMeal}
              clearFilter={handleClear}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  fetchMeals: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  changeMeal: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
  filters: PropTypes.shape({
    q: PropTypes.string,
    cuisineType: PropTypes.string,
  }),
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  meal: PropTypes.shape({}).isRequired,
};

App.defaultProps = {
  filters: PropTypes.shape({
    q: '',
    cuisineType: 'indian',
  }),
};

const mapStateToProps = (state) => ({
  meals: state.meals,
  filters: state.filters,
  meal: state.meal,
});

const mapDispatchToProps = (dispatch) => ({
  fetchMeals: (meals) => dispatch(fetchMeals(meals)),
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
  clearFilter: () => dispatch(clearFilter()),
  changeMeal: (meal) => dispatch(changeMeal(meal)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
