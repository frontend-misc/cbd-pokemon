import type ApiType from '../services/pokemon-api/interfaces/api-type.ts';
import type Pokemon from '../services/pokemon-api/interfaces/pokemon.ts';
import ENGLISH_TYPE_TO_FRENCH_ from './type/english-to-french-type.record.ts';

export interface ProcessedPokemonData {
  type: Map<string, ApiType>;
  typeCount: Map<string, number>;
  frenchType: Map<string, string>;
}

export function processPokemonData(pokemons: Pokemon[]): ProcessedPokemonData {
  const type = new Map<string, ApiType>();
  const typeCount = new Map<string, number>();
  const frenchType = new Map<string, string>();

  for (const pokemon of pokemons) {
    for (const apiType of pokemon.apiTypes) {
      const { name } = apiType;

      typeCount.set(name, (typeCount.get(name) ?? 0) + 1);

      if (!type.has(name)) {
        type.set(name, apiType);
      }

      const frenchTypeName = ENGLISH_TYPE_TO_FRENCH_[name];
      if (!frenchType.has(frenchTypeName)) {
        frenchType.set(frenchTypeName, name);
      }
    }
  }

  return {
    type,
    typeCount,
    frenchType,
  };
}
