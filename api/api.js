const baseURL = 'https://pokeapi.co/api/v2/';

export const getList = async (offset = 0) => {
  const response = await fetch(`${baseURL}pokemon?offset=${offset}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export const getPokemon = async (id) => {
  console.log(`${baseURL}pokemon/${id}`);
  const response = await fetch(`${baseURL}pokemon/${id}`);
  const data = await response.json();
  console.log(data);
  return data;
};

export const getTypes = async () => {
  const response = await fetch(`${baseURL}type`);
  const data = await response.json();
  console.log(data);
  return data;
};

export const getType = async (name) => {
  const response = await fetch(`${baseURL}type/${name}`);
  const data = await response.json();
  console.log(data);
  return data;
};
