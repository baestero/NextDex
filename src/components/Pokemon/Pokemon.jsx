import React from "react";
import styles from "./Pokemon.module.css";

const Pokemon = ({ pokemon }) => {
  return (
    <>
      <p className={styles.pBusca}>Resultados da busca</p>
      <div className={styles.pokemonContainer}>
        <div className={styles.pokemonCard}>
          {pokemon && (
            <img
              src={pokemon.sprites.other["official-artwork"].front_default}
              alt={pokemon.name}
            />
          )}
          {pokemon && <h3>{pokemon.name}</h3>}
          {pokemon && <p>{pokemon.types[0].type.name}</p>}
        </div>
        <div className={styles.pokemonCard}></div>
        <div className={styles.pokemonCard}></div>
        <div className={styles.pokemonCard}></div>
      </div>
    </>
  );
};

export default Pokemon;
