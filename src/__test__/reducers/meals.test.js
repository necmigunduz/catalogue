import mealsReducer from '../../reducers/meals';
import actions from '../../actions/index';

const { FETCH_MEALS } = actions;
const state = [{ meal: 'mealA' }];

describe('mealsReducer', () => {
  it('prepare meals state', () => {
    const meals = [{ meal: 'mealA' }, { meal: 'mealB' }, { meal: 'mealC' }];
    const action = {
      type: FETCH_MEALS,
      meals,
    };
    const updatedState = mealsReducer(state, action);
    expect(updatedState.length).toBe(3);
  });
  it('Does not mutate the original state', () => {
    const meals = [{ meal: 'mealA' }, { meal: 'mealB' }, { meal: 'mealC' }];
    const action = {
      type: FETCH_MEALS,
      meals,
    };
    const updatedState = mealsReducer(state, action);
    expect(state).not.toBe(updatedState);
  });
  it('returns the original state', () => {
    const action = {
      type: '',
      meals: [],
    };
    const updatedState = mealsReducer(state, action);
    expect(updatedState.length).toBe(1);
  });
});
