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
    <div className="card container" style={{ width: "400px", marginBottom: "40px", height: "300px", backgroundColor: "#FFF0F0", alignItems: "center"}}>
      <div className="card-header" style={{ width: "100%" }}> {onePoke.name} </div>
      <div className="card-body">
        <img src={onePoke.sprites.front_default} alt="poke-imagen" style={{width: "200px"}}/>
      </div>
    </div>
  );
}
