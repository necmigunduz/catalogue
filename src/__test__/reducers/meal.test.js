import mealReducer from '../../reducers/meal';
import actions from '../../actions/index';

const { CHANGE_MEAL } = actions;

const state = {};

describe('mealReducer', () => {
    it('changes meal state', () => {
        const meal = { q: 'valueA', cuisineType: 'Indian'};
        const action = {
            type: CHANGE_MEAL,
            meal,
        }
        const updatedState = mealReducer(state, action);
        expect(updatedState).toBe(meal);
    })

    it('does not mutate the previous state', () => {
        const meal = { q: 'valueA', cuisineType: 'Indian' };
        const action = {
          type: CHANGE_MEAL,
          meal,
        };
        mealReducer(state, action);
        expect(state).toStrictEqual({});
      });
})