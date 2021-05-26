/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IStats {
  hp?: number;
  attack: number;
  defense: number;
  special_attack?: number;
  special_defense?: number;
  speed?: number;
}

export interface IPokemon {
  id?: number;
  name_clean?: string;
  abilities?: Array<string>;
  stats?: IStats;
  types?: Array<string>;
  img?: string;
  name?: string;
  base_experience?: number;
  height?: number;
  is_default?: boolean;
  order?: number;
  weight?: number;
}

export interface IPokemonCardProps {
  pokemon?: IPokemon | undefined;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ pokemon }) => {
  const typeList = pokemon?.types;
  const [isOpenModal, setIsOpenModal] = useState(false);

  console.log('pokemon', pokemon);

  function handleClick() {
    setIsOpenModal(true);
  }

  return (
    <>
      <div role="button" onClick={handleClick} className={s.root}>
        <div className={s.infoWrap}>
          <Heading tag="h4" propsClassName={s.titleName}>
            {pokemon?.name}
          </Heading>
          <div className={s.statWrap}>
            <div className={s.statItem}>
              <div className={s.statValue}>{pokemon?.stats?.attack}</div>
              Attack
            </div>
            <div className={s.statItem}>
              <div className={s.statValue}>{pokemon?.stats?.defense}</div>
              Defense
            </div>
          </div>
          <div className={s.labelWrap}>
            {typeList &&
              typeList.map((item) => {
                return (
                  <span key={item} className={s.label}>
                    {item}
                  </span>
                );
              })}
          </div>
        </div>
        <div className={s.pictureWrap}>
          <img src={pokemon?.img} alt={pokemon?.name} />
        </div>
      </div>

      {isOpenModal && (
        <div className={s.modalWrap}>
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
              <p>Overgrow - Chlorophyll</p>
            </div>
            <div className={s.modalPoints}>
              <div className={s.modalPointsHealthy}>
                <p>Healthy Points</p>
                <p>1 000 000</p>
              </div>
              <div>
                <p>Experience</p>
                <p>1 000 000</p>
              </div>
            </div>
            <div className={s.skillsBlock}>
              <div className={s.skillsItem}>
                <p>{pokemon?.stats?.defense}</p>
                <p>Defense</p>
              </div>
              <div className={s.skillsItem}>
                <p>{pokemon?.stats?.attack}</p>
                <p>Attack</p>
              </div>
              <div className={s.skillsItem}>
                <p>{pokemon?.stats?.attack}</p>
                <p>Sp Attack</p>
              </div>
              <div className={s.skillsItem}>
                <p>{pokemon?.stats?.defense}</p>
                <p>Sp Defense</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PokemonCard;
