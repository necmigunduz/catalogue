import filterReducer from '../../reducers/filtersReducer';
import actions from '../../actions/index';

const { CLEAR_FILTER, CHANGE_FILTER } = actions;

const state = {
    q: '', dietLabels: '', healthLabels:'', cuisineType: '', dishType: '', mealType: '', 
}

describe('filtersReducer', () => {
    it('changes a filter', () => {
      const filter = 'q';
      const value = 'filterA';
      const action = {
        type: CHANGE_FILTER,
        filter,
        value,
      };
      const initialState = filterReducer(state, action);
      expect(initialState.q).toBe('filterA');
    });
  
    it('Does not mutate the original state', () => {
      const filter = 'dishType';
      const value = 'test';
      const action = {
        type: CHANGE_FILTER,
        filter,
        value,
      };
      const initialState = filterReducer(state, action);
      expect(initialState.dishType).toBe('test');
      expect(state.dishType).not.toBe('test');
    });
  
    it('clears filters', () => {
      const testState = {
        q: 'valueA', cuisineType: 'valueB', dishType: 'valueC', mealType: 'valueD',
      };
      const action = {
        type: CLEAR_FILTER,
      };
      const initialState = filterReducer(testState, action);
      expect(initialState.q).toBe('');
    });
  
    it('returns the same state by default', () => {
      const testState = {
        q: 'valueA', cuisineType: 'valueB', dishType: 'valueC', mealType: 'valueD',
      };
      const action = {
        type: '',
      };
      const initialState = filterReducer(testState, action);
      expect(initialState.q).toBe('valueA');
    });
  });