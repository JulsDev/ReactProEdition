import React from 'react';
import cn from 'classnames';

import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import PokemonCard from '../../components/PokemonCard';

import ps from './Pokedex.module.scss';
import as from '../../App.module.scss';

import pokemons from '../../assets/pokemons';

interface PokedexPageProps {
  title?: string;
}

const Pokedex: React.FC<PokedexPageProps> = () => {
  return (
    <>
      <Header />
      <Layout className={cn(as.container)}>
        <div className={ps.contentPokedex}>
          <Heading tag="h2" propsClassName={ps.mainTitle}>
            800 Pokemons for you to choose your favorite
          </Heading>
          <div className={ps.cardList}>
            {pokemons.map((item) => {
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
