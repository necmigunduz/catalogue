import React from 'react';
import renderer from 'react-test-renderer';
import FoodsInfo from '../../containers/FoodsInfo';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'example.com/test',
  }),
}));

describe('FoodsInfo', () => {
  it('renders properly', () => {
    const tree = renderer
      .create(
        <FoodsInfo
          meal={{}}
          filters={{
            q: '', dietLabels: '', healthLabels: '', cuisineType: '', dishType: '', mealType: '',
          }}
          fetchMeals={() => {}}
          changeFilter={() => {}}
          changeMeal={() => {}}
          clearFilter={() => {}}
        />,
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
