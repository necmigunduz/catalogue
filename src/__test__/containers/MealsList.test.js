import React from 'react';
import renderer from 'react-test-renderer';
import MealsList from '../../containers/MealsList';

describe('MealsList', () => {
    it('renders properly', () => {
        const tree = renderer
            .create(
                <MealsList
                    meals={[]}
                    filters={{
                        q: '', dietLabels: '', healthLabels:'', cuisineType: '', dishType: '', mealType: '',
                    }}
                    changeFilter={() => {}}
                    fetchMeals={() => {}}
                    clearFilter={() => {}}
                />
            ).toJSON();
            expect(tree).toMatchSnapshot();
    })
})