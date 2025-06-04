import React from "react";
import "./styles/global.css";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Pokemon from "./components/Pokemon/Pokemon";
import Filtro from "./components/Filtro/Filtro";
import Input from "./components/Input/Input";
import HomePokemons from "./components/HomePokemons/HomePokemons";

const App = () => {
  const [pokemon, setPokemon] = React.useState(null);
  const [homePokemon, setHomePokemon] = React.useState([]);
  const [corPokemon, setCorpokemon] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=9")
      .then((response) => response.json())
      .then((data) => data.json());
  }, []);

  const buscarPokemon = () => {
    if (searchValue !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`)
        .then((response) => response.json())
        .then((json) => setPokemon(json))
        .catch((err) => alert("Pokemon não encontrado", err));

      fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${searchValue.toLowerCase()}`
      )
        .then((res) => res.json())
        .then((corJson) => {
          setCorpokemon(corJson);
        });
    } else {
      setPokemon(false);
    }
  };

  return (
    <div className={styles.appContainer}>
      <Header />
      <section className={styles.searchSection}>
        <Input searchValue={searchValue} setSearchValue={setSearchValue} />
        <Search
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          buscar={buscarPokemon}
        />
        <Filtro />
      </section>
      {pokemon && corPokemon && (
        <Pokemon pokemon={pokemon} corPokemon={corPokemon} />
      )}
      {!pokemon && homePokemon && <HomePokemons homePokemon={homePokemon} />}
    </div>
  );
};

export default App;
