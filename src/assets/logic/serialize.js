const serialize = (base, obj) => {
  const keys = Object.keys(obj);
  let str = base;
  keys.forEach((key) => {
    if (obj[key] !== '') str += `${key}=${obj[key]}&`;
  });
  return str;
};

export default serialize;
