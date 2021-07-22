import serialize from './serialize';

const getData = async (parameters) => {
  const url = serialize('https://api.spoonacular.com/recipes/complexSearch?', parameters);
  const response = await fetch(url)
    .then((r) => r.json());
  console.log(response);
};

export default getData;
