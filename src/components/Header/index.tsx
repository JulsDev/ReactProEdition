import React from 'react';
import cn from 'classnames';

import s from './Header.module.scss';
import c from '../../App.module.scss';

import Navigation from '../Navigation';

import { ReactComponent as PokemonLogoSvg } from '../../assets/logo.svg';

function Header() {
  return (
    <header className={s.header__wrapper}>
      <div className={cn(c.container, s.header__content)}>
        <a href="./" className={s.logo__wrap}>
          <PokemonLogoSvg />
        </a>
        <Navigation />
      </div>
    </header>
  );
}

export default React.memo(Header);
