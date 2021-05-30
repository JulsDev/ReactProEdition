/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
import React from 'react';

import { IPokemon } from '../PokemonCard';

import s from '../PokemonCard/PokemonCard.module.scss';

interface PokemonDescrProps {
  pokemon: IPokemon | undefined;
  onCloseModal: () => void;
}

const PokemonDescription: React.FC<PokemonDescrProps> = ({ pokemon, onCloseModal }) => {
  return (
    <div className={s.modalWrap}>
      <div role="button" onClick={onCloseModal} className={s.modalClose}>
        CLOSE
      </div>
      <div className={s.modalImageWrap}>
        <img src={pokemon?.img} alt={pokemon?.name} className={s.modalImage} />
      </div>
      <div className={s.modalDescrWrap}>
        <div className={s.modalDescrTitle}>
          <p className={s.modalTitle}>{pokemon?.name}</p>
          <div>
            <span className={s.modalSubtitle}>Generation 1</span>
            <span className={s.modalSubtitleEllipce}>{pokemon?.base_experience}</span>
          </div>
        </div>
        <div className={s.modalAbilities}>
          <p>Abilities</p>
          {pokemon?.abilities?.map((item) => {
            return <span key={item}>{item}</span>;
          })}
        </div>
        <div className={s.modalPoints}>
          <div className={s.modalPointsHealthy}>
            <p>Healthy Points</p>
            <p>1 000 000</p>
            <div className={s.modalPointLevel}></div>
          </div>
          <div>
            <p>Experience</p>
            <p>1 000 000</p>
            <div className={s.modalPointLevel}></div>
          </div>
        </div>
        <div className={s.skillsList}>
          <div className={s.skillsItem}>
            <p className={s.skillsPoint}>{pokemon?.stats?.defense}</p>
            <p>Defense</p>
          </div>
          <div className={s.skillsItem}>
            <p className={s.skillsPoint}>{pokemon?.stats?.attack}</p>
            <p>Attack</p>
          </div>
          <div className={s.skillsItem}>
            <p className={s.skillsPoint}>{pokemon?.stats?.attack}</p>
            <p>Sp Attack</p>
          </div>
          <div className={s.skillsItem}>
            <p className={s.skillsPoint}>{pokemon?.stats?.defense}</p>
            <p>Sp Defense</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDescription;
