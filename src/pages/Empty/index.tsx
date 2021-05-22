import React from 'react';
import cn from 'classnames';

import Header from '../../components/Header';
import Layout from '../../components/Layout';

import as from '../../App.module.scss';

interface EmptyPageProps {
  title?: string;
}

const Empty: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <Layout className={cn(as.container)}>Empty Page - {title}</Layout>
    </div>
  );
};

export default Empty;
