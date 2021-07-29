import getData from '../../assets/logic/FetchData';

beforeEach(() => {
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue({
      hits: [
        {
          recipe: {
            label: '',
            image: '',
            ingredients: '',
            dietLabels: '',
            healthLabels: '',
            cuisineType: '',
            dishType: '',
            mealType: '',
            url: '',
            uri: '82415_82415',
          },
        },
      ],
    }),
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('FecthData', () => {
  it('gets information from API and creates and info array', async () => {
    const parameters = {
      q: 'chicken cheese',
      dietLabels: '',
      healthLabels: '',
      cuisineType: '',
      dishType: '',
      mealType: '',
    };

    const data = await getData(parameters, 0, 1);
    expect(data[0].id).toBe('82415');
    expect(data[0].title).toBe('');
  });
  it('retunrs an empty array at failure', async () => {
    fetch.mockRejectedValueOnce();
    const parameters = {
      q: 'chicken cheese',
      dietLabels: '',
      healthLabels: '',
      cuisineType: '',
      dishType: '',
      mealType: '',
    };
    const data = await getData(parameters, 0, 1);
    expect(data).toStrictEqual([]);
  });
});
