import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard, { IPokemon } from '../../components/PokemonCard';

import ps from './Pokedex.module.scss';
import as from '../../App.module.scss';

import req from '../../utils';

interface IData {
  count: number;
  limit: string;
  offset: number;
  total: number;
  pokemons: IPokemon[];
}
interface PokedexPageProps {
  data: IData;
  isLoading: string;
  isError: string;
}

const usePokemons = () => {
  const [data, setData] = useState<IData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async (): Promise<void> => {
      setIsLoading(true);
      try {
        const result = await req('getPokemons');
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const Pokedex: React.FC<PokedexPageProps> = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return (
      <div className={ps.contentPokedex}>
        <div>Loading...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className={ps.contentPokedex}>
        <div>Something wrong!</div>
      </div>
    );
  }

  return (
    <>
      <Layout className={cn(as.container)}>
        <div className={ps.contentPokedex}>
          <Heading tag="h2" propsClassName={ps.mainTitle}>
            {!isLoading && data?.total} Pokemons for you to choose your favorite
          </Heading>
          <div className={ps.cardList}>
            {data?.pokemons.map((item) => {
              return (
                <div key={item.id} className={ps.cardWrapper}>
                  <PokemonCard pokemon={item} />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Pokedex;
