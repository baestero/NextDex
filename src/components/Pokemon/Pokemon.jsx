import React from "react";

const Pokemon = ({ pokemon }) => {
  return (
    <div>
      {pokemon && <h1>{pokemon.name}</h1>}
      {pokemon && (
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      )}
    </div>
  );
};

export default Pokemon;
