import { useMemo } from 'react';
import type Pokemon from '../../services/pokemon-api/interfaces/pokemon.ts';

type Operator = 'contain' | 'include' | '>' | '<' | '>=' | '<=' | '=';
type Query = {
  field: 'name' | 'type' | 'id';
  operator: Operator;
  value: string | number;
};

function parseQuery(query: string): Query[] {
  const regex = /(\w+)\s+(contain|include|>|<|>=|<=|=)\s+"?([^"]+)"?/gi;
  const matches: Query[] = [];

  let match: null | RegExpExecArray = null;
  while ((match = regex.exec(query)) !== null) {
    const [, field, operator, value] = match;

    matches.push({
      field: field as Query['field'],
      operator: operator as Operator,
      value: isNaN(Number(value)) ? value : Number(value),
    });
  }

  return matches;
}

function useSearchFilter(pokemons: Pokemon[], query: string): Pokemon[] {
  return useMemo(() => {
    if (!query.trim()) {
      return pokemons;
    }

    const parsedQueries = parseQuery(query);

    return pokemons.filter((pokemon) => {
      return parsedQueries.every((parsedQuery) => {
        let fieldValue: string | number | string[] = '';
        if (parsedQuery.field === 'name') {
          fieldValue = pokemon.name.toLowerCase();
        } else if (parsedQuery.field === 'type') {
          fieldValue = pokemon.apiTypes.map((type) => type.name.toLowerCase());
        } else {
          fieldValue = pokemon.id;
        }

        const targetValue =
          typeof parsedQuery.value == 'string'
            ? parsedQuery.value.toLowerCase()
            : parsedQuery.value;

        switch (parsedQuery.operator) {
          case 'contain':
            return typeof fieldValue != 'string'
              ? false
              : fieldValue.includes(targetValue as string);
          case 'include':
            return Array.isArray(fieldValue) == false
              ? false
              : fieldValue.includes(targetValue as string);
          case '=':
            return fieldValue === targetValue;
          case '>':
            return typeof fieldValue != 'number'
              ? false
              : (fieldValue as number) > (targetValue as number);
          case '<':
            return typeof fieldValue != 'number'
              ? false
              : (fieldValue as number) < (targetValue as number);
          case '>=':
            return typeof fieldValue != 'number'
              ? false
              : (fieldValue as number) >= (targetValue as number);
          case '<=':
            return typeof fieldValue != 'number'
              ? false
              : (fieldValue as number) <= (targetValue as number);
          default:
            return false;
        }
      });
    });
  }, [pokemons, query]);
}

export default useSearchFilter;
