import React from 'react';
import renderer from 'react-test-renderer';
import SearchField from '../../components/Search';

describe('Search', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(
                <SearchField
                filters={{
                    q: '', dietLabels: '', healthLabels: '', cuisineType: '', dishType: '', mealType: '',
                }}
                filterHandler={() => {}}
                submitHandler={() => {}}
                clear={() => {}}
              />
            ).toJSON();
            expect(tree).toMatchSnapshot();
    })
})