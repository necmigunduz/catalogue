const storage = (() => {
  const save = (filters) => {
    localStorage.filters = JSON.stringify(filters);
  };

  const load = () => {
    if (!localStorage.filters) {
      return {
        q: '', cuisineType: '', dishType: '', mealType: '',
      };
    }
    const filters = JSON.parse(localStorage.filters);
    return filters;
  };

  return { save, load };
})();

export default storage;
