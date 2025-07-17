import type Pokemon from '../../services/pokemon-api/interfaces/pokemon.ts';
import type ApiType from '../../services/pokemon-api/interfaces/api-type.ts';
import MainCard from '../MainCard';
import TypeCardList from '../TypeCardList';

import './top-information.scss';

interface TopInformationProps {
  pokemons: Pokemon[];
  type: Map<string, ApiType>;
  typeCount: Map<string, number>;
}

function TopInformation({ pokemons, type, typeCount }: TopInformationProps) {
  return (
    <section className="top-information">
      <MainCard numberOfPokemons={pokemons.length} />
      <TypeCardList type={type} typeCount={typeCount} />
    </section>
  );
}

export default TopInformation;
