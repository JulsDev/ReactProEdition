import React from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';

import hs from './Home.module.scss';
import as from '../../App.module.scss';

import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Button, { ButtonSize } from '../../components/Button';
import Parallax from '../../components/Parallax';
import Footer from '../../components/Footer';

import { LinkEnum } from '../../routes';

function handleClick() {
  navigate(LinkEnum.POKEDEX);
}

const HomePage: React.FC = () => {
  return (
    <>
      <div className={hs.content__wrapper}>
        <Layout className={cn(as.container)}>
          <div className={hs.content__home}>
            <div className={hs.content__text}>
              <Heading tag="h1" propsClassName={hs.content__title}>
                <strong>Find</strong> all your favorite <strong>Pokemon</strong>
              </Heading>
              <Heading tag="h2" propsClassName={hs.content__subtitle}>
                You can know the type of Pokemon, its strengths, disadvantages and abilities
              </Heading>
              <div className={hs.contentBtn}>
                <Button onClick={handleClick} type="button" color="green" size={ButtonSize.medium}>
                  See pokemons
                </Button>
              </div>
            </div>
            <Parallax />
          </div>
        </Layout>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
