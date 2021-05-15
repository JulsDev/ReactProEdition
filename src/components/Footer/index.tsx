import React from 'react';
import cn from 'classnames';
/* eslint-disable jsx-a11y/accessible-emoji */
import fs from './Footer.module.scss';
import as from '../../App.module.scss';

export default function Footer() {
  return (
    <footer className={fs.footer__wrapper}>
      <div className={cn(as.container, fs.footer__content)}>Make with ❤️</div>
    </footer>
  );
}
