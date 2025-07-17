import type Pokemon from '../../services/pokemon-api/interfaces/pokemon.ts';
import { useEffect, useState } from 'react';
import { getPokemons } from '../../services/pokemon-api/get-pokemons.service.ts';

function usePokemonData() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();
    let isCancelled = false;

    const fetchPokemons = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getPokemons();
        if (!isCancelled) {
          setPokemons(data);
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    };

    fetchPokemons();

    return () => {
      isCancelled = true;
      controller.abort();
    };
  }, []);

  return {
    pokemons,
    isLoading,
    error,
  };
}

export default usePokemonData;
