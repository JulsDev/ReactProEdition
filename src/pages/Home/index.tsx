import React from 'react';
import cn from 'classnames';

import hs from './Home.module.scss';
import as from '../../App.module.scss';

import Footer from '../../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className={hs.content__wrapper}>
      <div className={cn(as.container)}>
        <div className={hs.content__home}>
          <div className={hs.content__text}>
            <h1 className={hs.content__title}>
              <strong>Find</strong> all your favorite <strong>Pokemon</strong>
            </h1>
            <h2 className={hs.content__subtitle}>
              You can know the type of Pokemon, its strengths, disadvantages and abilities
            </h2>
            <button type="button">See pokemons</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
