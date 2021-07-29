import serialize from './serialize';

const getData = async (params, from, to) => {
  const {
    q, dietLabels, healthLabels, cuisineType, dishType, mealType,
  } = params;

  const parameters = {
    q,
    dietLabels,
    healthLabels,
    cuisineType,
    dishType,
    mealType,
    app_id: process.env.REACT_APP_ID,
    app_key: process.env.REACT_APP_KEY,
    from,
    to,
  };

  const url = serialize('https://api.edamam.com/search?', parameters);
  try {
    const response = await fetch(url)
      .then((r) => r.json());
    const mealsArray = [];
    for (let i = 0; i < response.hits.length; i += 1) {
      const {
        label, image, ingredients, dietLabels, healthLabels, cuisineType, dishType, mealType, url,
      } = response.hits[i].recipe;
      const id = (response.hits[i].recipe.uri).split('_')[1];
      const cuisine = cuisineType ? cuisineType[0] : '';
      mealsArray.push({
        id,
        title: label,
        image,
        ingredients,
        diet: dietLabels,
        health: healthLabels,
        cuisine,
        dishType,
        mealType,
        url,
      });
    }
    return mealsArray;
  } catch {
    return [];
  }
};

export default getData;
