import React from "react";
import Pokecard from "./Pokecard";

const Pokedex = ({ arr }) => {
  return (
    <>
      {arr.map((i) => {
        return (
          <Pokecard
            key={i.id}
            id={i.id}
            name={i.name}
            type={i.type}
            base_experience={i.base_experience}
          />
        );
      })}
    </>
  );
};

export default Pokedex;
