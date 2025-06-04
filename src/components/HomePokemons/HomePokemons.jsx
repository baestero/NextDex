import React from "react";
import styles from "./HomePokemons.module.css";

const HomePokemons = ({ homePokemon }) => {
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

  function primeiraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  return (
    <>
      <div className={styles.pokemonContainer}>
        {homePokemon.map((pokemon) => {
          const backgroundColor = pokemonColors[pokemon.color] || "#FFF";
          return (
            <div key={pokemon.name} className={styles.pokemonCard}>
              <h3>{primeiraMaiuscula(pokemon.name)}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomePokemons;
