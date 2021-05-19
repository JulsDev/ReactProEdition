/* eslint-disable camelcase */
import React from 'react';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IStats {
  hp?: number;
  attack: number;
  defense: number;
  specialAttack?: number;
  specialDefense?: number;
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
  return (
    <div className={s.root}>
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
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon?.img} alt={pokemon?.name} />
      </div>
    </div>
  );
};

export default PokemonCard;
