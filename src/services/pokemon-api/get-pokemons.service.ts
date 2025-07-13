import pokemonApi from "./pokemon-api.ts";
import type Pokemon from './interfaces/pokemon.ts';

export async function getPokemons(): Promise<Pokemon[]> {
  const response= await pokemonApi.get<Pokemon[]>("api/v1/pokemon")
  return response.data
}
