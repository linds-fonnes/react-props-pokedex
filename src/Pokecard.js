import React from "react";
import "./Pokecard.css";

const Pokecard = ({ id, name, type, base_experience }) => {
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  return (
    <div className="Pokecard-container">
      <h1 className="Pokecard-name">{name}</h1>
      <img className="Pokecard-image" src={image} alt="pokemon" />
      <p>Type : {type}</p>
      <p> EXP: {base_experience}</p>
    </div>
  );
};

export default Pokecard;
