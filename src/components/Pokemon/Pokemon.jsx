import React from "react";
import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon }) => {
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

  const backgroundColor = pokemonColors[pokemon.color] || "#FFF";

  return (
    <>
      <p className={styles.pBusca}>Resultados da busca</p>
      <div className={styles.pokemonContainer}>
        <div style={{ backgroundColor }} className={styles.pokemonCard}>
          <img src={pokemon.image} alt={pokemon.name} />
          <h3>{pokemon.name}</h3>
          <p>{pokemon.type}</p>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
