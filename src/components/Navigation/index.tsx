import React from 'react';

import s from './Navigation.module.scss';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '#',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '#',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '#',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '#',
  },
];

export default function Navigation() {
  return (
    <nav className={s.nav__wrapper}>
      <ul className={s.nav__list}>
        {MENU.map((item) => (
          <a key={item.id} href={item.link} className={s.nav__item}>
            <li>{item.value}</li>
          </a>
        ))}
      </ul>
    </nav>
  );
}
