import React from "react";
import styles from "./HomePokemon.module.css";

const HomePokemon = ({ homePokemon, animacao, type }) => {
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

  return (
    <>
      <div
        className={`${styles.pokemonContainer} ${animacao ? styles.ativo : ""}`}
      >
        {homePokemon &&
          homePokemon
            .filter((pokemon) => pokemon.type.includes(type))
            .map((pokemon) => {
              const backgroundColor = pokemonColors[pokemon.color] || "#FFF";
              return (
                <div
                  style={{ backgroundColor }}
                  key={pokemon.name}
                  className={styles.pokemonCard}
                >
                  <img src={pokemon.image} alt="" />
                  <h3>{pokemon.name}</h3>
                  <p>{pokemon.type}</p>
                </div>
              );
            })}
      </div>
    </>
  );
};

export default HomePokemon;
