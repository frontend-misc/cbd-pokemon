import type Pokemon from '../../../services/pokemon-api/interfaces/pokemon.ts';
import type ApiType from '../../../services/pokemon-api/interfaces/api-type.ts';
import { type JSX } from 'react';
import DamageRelation from '../../../services/pokemon-api/enums/damage-relation.enum.ts';
import { getLowerCaseEnglishTypeFromFrench } from '../../../helpers/getLowerCaseEnglishTypeFromFrench.helper.ts';
import PreEvolution from '../../../services/pokemon-api/enums/pre-evolution.enum.ts';

interface PokemonRowProps {
  pokemon: Pokemon;
  type: Map<string, ApiType>;
}

function PokemonRow({ pokemon, type }: PokemonRowProps) {
  const preEvolution: string =
    typeof pokemon.apiPreEvolution === 'string'
      ? pokemon.apiPreEvolution
      : pokemon.apiPreEvolution?.name;

  const totalBaseStat: number = Object.values(pokemon.stats).reduce((acc, stat) => acc + stat, 0);

  const vulnerabilityElements: (null | JSX.Element)[] = pokemon.apiResistances
    .filter((resistance) => resistance.damage_relation == DamageRelation.VULNERABLE)
    .map((resistance) => {
      const apiType = type.get(resistance.name);
      if (!apiType) return null;

      return (
        <img
          key={`vulnerability-${pokemon.id}${apiType?.name}`}
          src={apiType?.image}
          alt={apiType?.name}
          className={`pokemon-type-image type-circle ${`${getLowerCaseEnglishTypeFromFrench(apiType.name)}-type-bg-color`}`}
        />
      );
    });

  const resistanceElements: (null | JSX.Element)[] = pokemon.apiResistances
    .filter((resistance) => resistance.damage_relation == DamageRelation.RESISTANT)
    .map((resistance) => {
      const apiType = type.get(resistance.name);
      if (!apiType) return null;

      return (
        <img
          key={`resistance-${pokemon.id}-${apiType?.name}`}
          src={apiType?.image}
          alt={apiType?.name}
          className={`pokemon-type-image type-circle ${`${getLowerCaseEnglishTypeFromFrench(apiType.name)}-type-bg-color`}`}
        />
      );
    });

  return (
    <tr key={pokemon.id} className="pokemon-list-tr">
      <td className="pokemon-list-tr__td">{pokemon.id}</td>
      <td className="pokemon-list-tr__td">{pokemon.name}</td>
      <td className="pokemon-list-tr__td">
        {pokemon.apiTypes.map((apiType) => (
          <img
            key={`api-type-${pokemon.id}-${apiType.name}`}
            src={apiType.image}
            alt={apiType.name}
            className={`pokemon-type-image type-circle ${`${getLowerCaseEnglishTypeFromFrench(apiType.name)}-type-bg-color`}`}
          />
        ))}
      </td>
      <td className="pokemon-list-tr__td">{totalBaseStat}</td>
      <td className="pokemon-list-tr__td">{pokemon.apiGeneration}</td>
      <td className="pokemon-list-tr__td">
        {pokemon.apiEvolutions.length === 0 ? '' : pokemon.apiEvolutions[0].name}
      </td>
      <td className="pokemon-list-tr__td">
        {preEvolution == PreEvolution.NONE ? '' : preEvolution}
      </td>
      <td className="pokemon-list-tr__td">{resistanceElements}</td>
      <td className="pokemon-list-tr__td">{vulnerabilityElements}</td>
    </tr>
  );
}

export default PokemonRow;
