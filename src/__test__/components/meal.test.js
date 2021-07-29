import React from 'react';
import renderer from 'react-test-renderer';
import Meal from '../../components/Meal';

describe('Meal', () => {
  it('Creates meal for mealList', () => {
    const tree = renderer
      .create(
        <Meal
          id="1"
          title="mealA"
          image="image"
          cuisine="cuisineA"
          dish={['dishA']}
          meal={['mealA']}
          key="1"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

// id, title, image, diet, health, cuisine, dish, meal,
