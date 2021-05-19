import React from 'react';
import { A } from 'hookrouter';

import s from './Navigation.module.scss';
import { GENERAL_MENU } from '../../routes';

export default function Navigation() {
  return (
    <nav className={s.nav__wrapper}>
      <ul className={s.nav__list}>
        {GENERAL_MENU.map((item) => (
          <A key={item.title} href={item.link} className={s.nav__item}>
            <li>{item.title}</li>
          </A>
        ))}
      </ul>
    </nav>
  );
}
