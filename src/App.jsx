import React from "react";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Pokemon from "./components/Pokemon/Pokemon";

const App = () => {
  const [pokemon, setPokemon] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");

  const buscarPokemon = () => {
    if (searchValue !== "") {
      fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`)
        .then((response) => response.json())
        .then((json) => setPokemon(json))
        .catch((err) => alert("Pokemon não encontrado", err));
    } else {
      alert("digite  nome ou id do pokemon");
    }
  };

  return (
    <div className="appContainer">
      <Header />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        buscar={buscarPokemon}
      />
      <Pokemon pokemon={pokemon} />
    </div>
  );
};

export default App;
