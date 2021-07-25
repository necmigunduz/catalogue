import actions, {
  fetchMeals, changeFilter, changeMeal, clearFilter,
} from '../../actions/index';

const { FETCH_MEALS, CHANGE_MEAL, CHANGE_FILTER, CLEAR_FILTER } = actions;

describe('fetchMeals', () => {
    it('sets the state foods to a new array', () => {
        const meals = [{meal: 'mealA'}, {meal: 'mealB'}];
        const expectation = {
            type: FETCH_MEALS,
            meals,
        };
        expect(fetchMeals(meals)).toStrictEqual(expectation);
    })
})

describe('changeFilter', () => {
    it('sets a filter to a given value', () => {
        const filter = 'q';
        const value = 'filterA';
        const expectation = {
            type: CHANGE_FILTER,
            filter,
            value,
        };
        expect(changeFilter(filter, value)).toStrictEqual(expectation);
    })
})

describe('changeMeal', () => {
    it('sets a meal', () => {
        const meal = 'mealA';
        const expectation = {
            type: CHANGE_MEAL,
            meal,
        };
        expect(changeMeal(meal)).toStrictEqual(expectation);
    })
})

describe('clearFilter', () => {
    it('clears filters', () => {
        const expectation = {
            type: CLEAR_FILTER,
        };
        expect(clearFilter()).toStrictEqual(expectation);
    })
})