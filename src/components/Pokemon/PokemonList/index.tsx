import type ApiType from '../../../services/pokemon-api/interfaces/api-type.ts';
import type Pokemon from '../../../services/pokemon-api/interfaces/pokemon.ts';

import './pokemon-list.scss';
import PokemonRow from '../PokemonRow';

interface PokemonListProps {
  pokemons: Pokemon[];
  type: Map<string, ApiType>;
}

function PokemonList({ pokemons, type }: PokemonListProps) {
  return (
    <table className="pokemon-list">
      <thead className="pokemon-list__thead">
        <tr className="pokemon-list__thead__tr">
          <th className="pokemon-list__thead__tr__th">Id</th>
          <th className="pokemon-list__thead__tr__th">Name</th>
          <th className="pokemon-list__thead__tr__th">Type</th>
          <th className="pokemon-list__thead__tr__th">Base stat</th>
          <th className="pokemon-list__thead__tr__th">Generation</th>
          <th className="pokemon-list__thead__tr__th">Evolution</th>
          <th className="pokemon-list__thead__tr__th">PreEvolution</th>
          <th className="pokemon-list__thead__tr__th">Resistance</th>
          <th className="pokemon-list__thead__tr__th">Vulnerable</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon: Pokemon) => (
          <PokemonRow key={`pokemon-${pokemon.id}`} pokemon={pokemon} type={type} />
        ))}
      </tbody>
    </table>
  );
}

export default PokemonList;
