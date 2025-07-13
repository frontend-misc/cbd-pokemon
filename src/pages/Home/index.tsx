import { useState } from 'react';

import PokemonList from '../../components/Pokemon/PokemonList';
import usePokemonData from '../../hooks/api/usePokemonData.ts';
import CustomError from '../../components/CustomError';
import deepCloneMap from '../../utils/deepMapClone.utils.ts';
import { processPokemonData } from '../../helpers/processPokemonData.ts';
import SearchBar from '../../components/SearchBar';
import useSearchFilter from '../../hooks/features/useSearchBarFilter.tsx';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import usePagination from '../../hooks/features/usePagination.tsx';
import TopInformation from '../../components/TopInformation';

import './home.scss';

function Home() {
  const [query, setQuery] = useState('');

  const { pokemons, error, isLoading } = usePokemonData();
  const filteredPokemons = useSearchFilter(pokemons, query);
  const paginated = usePagination(filteredPokemons, 14);

  const { type, typeCount } = processPokemonData(pokemons);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <CustomError error={error} />;
  }

  return (
    <div className="home">
      <TopInformation pokemons={pokemons} type={deepCloneMap(type)} typeCount={typeCount} />
      <SearchBar onSearch={setQuery} />
      <PokemonList pokemons={paginated.currentItems} type={deepCloneMap(type)} />
      <Pagination
        currentPage={paginated.currentPage}
        totalPages={paginated.totalPages}
        onFirstPage={paginated.firstPage}
        onLastPage={paginated.lastPage}
        onPageChange={paginated.goToPage}
      />
    </div>
  );
}

export default Home;
