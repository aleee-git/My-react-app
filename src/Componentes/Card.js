import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Card({pokemon}) {

  const [onePoke, setOnePoke] = useState ({
    name : "",
    sprites : {front_default: ""}

  })

    useEffect (()=> {
        getPokemon(pokemon.url)
    })

    const getPokemon = (url) => {
      axios.get(url)
      .then((respuesta) => {setOnePoke(respuesta.data)})
    }

  return (
    <div className="card text-center" style={{ width: "600px", backgroundColor: "#FFF0F0", alignItems: "center"}}>
      <div className="card-header" style={{ width: "100%" }}> {onePoke.name} </div>
      <div className="card-body">
        <img src={onePoke.sprites.front_default} alt="poke-imagen" />
      </div>
    </div>
  );
}
