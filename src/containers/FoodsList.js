import Food from '../components/Food';
import Search from '../components/Search';
import getData from '../assets/logic/FetchData';

const FoodsList = () => {
  const parameters = {
    apiKey: process.env.REACT_APP_API_KEY,
    number: 20,
  };

  getData(parameters);
  return (
    <>
      <Search />
      <Food />
    </>
  );
};

export default FoodsList;
