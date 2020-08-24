import Axios from 'axios';


const instance = Axios.create({
  baseURL: 'https://api.chucknorris.io'
});

export const getFactRandomly = () => {
  const urlApi = '/jokes/random';
  return instance.get(urlApi)
    .catch((error) => {
      console.log('ERROR', error);
    });
}

export const getFactByCategory = (category) => {
  const urlApi = `/jokes/random?category=${category}`;
  return instance.get(urlApi)
    .catch((error) => {
      console.log('ERROR', error);
    });
}

export const getFactByText = (text) => {
  const urlApi = `/jokes/search?query=${text}`;
  return instance.get(urlApi)
    .catch((error) => {
      console.log('ERROR', error);
    });
}

export const getCategories = () => {
  const urlApi = '/jokes/categories';
  return instance.get(urlApi)
    .catch((error) => {
      console.log('ERROR', error);
    });
}