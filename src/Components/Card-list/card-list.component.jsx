import React from 'react';

import './card-list.styles.css';

import {Card} from '../Card/card.component'

export const CardList=(props) => {

return (<div className='card-list'>
    {
    props.monsters.map(monster =>
    // <h1 key={monsters.id}>{monsters.name}</h1>
    <Card key={monster.id} monster={monster} />
    )
  }
  </div>)
}