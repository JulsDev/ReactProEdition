import React from 'react';
import cn from 'classnames';

import Header from '../../components/Header';
import Layout from '../../components/Layout';

import hs from '../Home/Home.module.scss';
import as from '../../App.module.scss';

interface LegendariesPageProps {
  title?: string;
}

const Legendaries: React.FC<LegendariesPageProps> = ({ title }) => {
  return (
    <>
      <Header />
      <Layout className={cn(as.container)}>
        <div className={hs.content__home}>Pokedex Page - {title}</div>
      </Layout>
    </>
  );
};

export default Legendaries;
