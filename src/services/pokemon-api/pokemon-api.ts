import axios from 'axios';

const pokemonApi = axios.create({
  baseURL: import.meta.env.PUBLIC_POKEMON_API_URL || 'https://pokebuildapi.fr',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default pokemonApi;
