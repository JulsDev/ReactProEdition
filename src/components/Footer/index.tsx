import React from 'react';
import cn from 'classnames';

import fs from './Footer.module.scss';
import as from '../../App.module.scss';

export default function Footer() {
  return (
    <footer className={fs.footer__wrapper}>
      <div className={cn(as.container, fs.footer__content)}>
        <span role="img" aria-label="heart">
          Make with ❤️
        </span>
        <div>Ours Team</div>
      </div>
    </footer>
  );
}
