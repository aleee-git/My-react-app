import React from 'react';
import Card from './Card';

export default function DisplayPoke({pokemons}) {


  return (
    <div className='row'>

        {pokemons.map((pj) => <Card pokemon={pj}/>)}

    </div>
  );
}
