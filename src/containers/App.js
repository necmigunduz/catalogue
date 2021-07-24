import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import '../assets/styles/App.css';
import MealsList from './MealsList';
import FoodsInfo from './FoodsInfo';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <MealsList />
          )}
        />
        <Route
          exact
          path="/recipe"
          render={() => (
            <FoodsInfo />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
