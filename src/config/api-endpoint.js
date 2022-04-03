import CONFIG from './config';

const API_ENDPOINT = {
  /* Search Recipes */
  SEARCH_RECIPES: (query) =>
    `${CONFIG.BASE_URL}/recipes/complexSearch?query=${query}&apiKey=${CONFIG.API_KEY}`,
};

export default API_ENDPOINT;
