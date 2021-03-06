import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import getData from '../assets/logic/FetchData';
import SearchField from '../components/Search';

const FoodsInfo = (props) => {
  const {
    meal, filters, changeMeal, changeFilter, clearFilter,
  } = props;

  const location = useLocation();
  const id = location.pathname.split('/')[2];

  const setMeal = async (parameters, from, to) => {
    const [currentMeal] = await getData(parameters, from, to);
    changeMeal(currentMeal);
  };

  const handleClear = () => {
    clearFilter();
  };

  useEffect(() => {
    const params = { q: id };
    setMeal(params, 0, 1);
  }, []);

  const currentMeal = meal || [];
  let ingredientsToBeUsed = '';
  if (currentMeal.ingredients) {
    let count = 0;
    ingredientsToBeUsed = currentMeal.ingredients.map((e) => {
      count += 1;
      return <p key={count} className="ingredients">{e.text}</p>;
    });
  }

  return (
    <>
      <SearchField
        link="/"
        filters={filters}
        filterHandler={changeFilter}
        clear={handleClear}
      />
      <div className="m-center">
        <h1 className="m-left fs-40 fw-600">{currentMeal.title}</h1>
        <div className="meal m-left">
          <div>
            <img alt="mealimage" src={currentMeal.image} />
            <div>
              <div>
                <h3 className="pad-20 fs-30 fw-900">Ingredients</h3>
                {ingredientsToBeUsed}
              </div>
              <a href={currentMeal.url} target="_blank" rel="none noreferrer" className="link">{`Link to: ${currentMeal.title}`}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

FoodsInfo.propTypes = {
  meal: PropTypes.shape({}).isRequired,
  filters: PropTypes.shape({}).isRequired,
  changeMeal: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  clearFilter: PropTypes.func.isRequired,
};

export default FoodsInfo;
