import Food from '../components/Food';
import Search from '../components/Search';
import getData from '../assets/logic/FetchData';

const FoodsList = () => {
  const parameters = {
    apiKey: '24364ac435e44b1b828237a300173ae0',
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
