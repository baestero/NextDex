import React from "react";
import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon, corPokemon }) => {
  const pokemonColors = {
    black: "#E9E9E9",
    blue: "#D6E2FC",
    brown: "#FFCCCC",
    gray: "#E9E9E9",
    green: "#DCFFC7",
    pink: "#FFDAE2",
    purple: "#FFCDFE",
    red: "#FFD4D9",
    white: "#F5F5F5",
    yellow: "#FFF3C5",
  };
  const backgroundColor = pokemonColors[corPokemon.color.name] || "#FFF";

  function primeiraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  return (
    <>
      <p className={styles.pBusca}>Resultados da busca</p>
      <div className={styles.pokemonContainer}>
        <div style={{ backgroundColor }} className={styles.pokemonCard}>
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <h3>{primeiraMaiuscula(pokemon.name)}</h3>
          <p>{primeiraMaiuscula(pokemon.types[0].type.name)}</p>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
