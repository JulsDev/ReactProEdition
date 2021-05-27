/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';

import Heading from '../Heading';
import PokemonDescription from '../PokemonDescription';

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

  function selectedPokemonClick() {
    setIsOpenModal(true);
  }

  const onCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <div role="button" onClick={selectedPokemonClick} className={s.root}>
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
      {isOpenModal && <PokemonDescription pokemon={pokemon} onCloseModal={onCloseModal} />}
    </>
  );
};

export default PokemonCard;
