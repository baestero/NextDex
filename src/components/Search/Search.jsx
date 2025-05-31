import React from "react";
import styles from "./Search.module.css";

const Search = () => {
  const [pokemon, setPokemon] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }

  function buscarPokemon() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
      .then((response) => response.json())
      .then((json) => setPokemon(json));
  }

  return (
    <>
      <div className={styles.searchContainer}>
        <div onClick={buscarPokemon} className={styles.lupaContainer}>
          <img className={styles.lupa} src="public\icons\lupa.svg" alt="" />
        </div>

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar Pokemon"
          value={searchValue}
          onChange={handleInputChange}
        />

        <div className={styles.filterContainer}>
          <img src="public\icons\filter.svg" alt="" />
        </div>
      </div>

      <div>
        {pokemon && <h1>{pokemon.name}</h1>}
        {pokemon && (
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
        )}
      </div>
    </>
  );
};

export default Search;
