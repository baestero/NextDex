import React from "react";
import "./styles/global.css";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import Pokemon from "./components/Pokemon/Pokemon";
import Filtro from "./components/Filtro/Filtro";
import Input from "./components/Input/Input";
import HomePokemon from "./components/HomePokemon/HomePokemon";
import FiltroModal from "./components/FiltroModal/FiltroModal";

const App = () => {
  const [pokemon, setPokemon] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState("");
  const [homePokemon, setHomePokemon] = React.useState("");
  const [animaBusca, setanimaBusca] = React.useState(false);
  const [animaHome, setanimaHome] = React.useState(false);
  const [filterModal, setfilterModal] = React.useState(false);
  const [type, setType] = React.useState("");

  React.useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const data = await response.json();

      const detalhes = await Promise.all(
        data.results.map(async (pokemon) => {
          const geral = await fetch(pokemon.url);
          const dataGeral = await geral.json();

          const species = await fetch(
            `https://pokeapi.co/api/v2/pokemon-species/${dataGeral.name}`
          );
          const dataSpecies = await species.json();

          return {
            name: dataGeral.name,
            image: dataGeral.sprites.other["official-artwork"].front_default,
            type: dataGeral.types
              .map((t) => primeiraMaiuscula(t.type.name))
              .join(" / "),
            color: dataSpecies.color.name,
          };
        })
      );
      setHomePokemon(detalhes);
    })();
  }, []);

  React.useEffect(() => {
    if (homePokemon && homePokemon.length > 0) {
      setTimeout(() => {
        setanimaHome(true);
      }, 100);
    }
  }, [homePokemon]);

  const buscarPokemon = async () => {
    if (searchValue != "") {
      try {
        setanimaBusca(false);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`
        );
        const responseCor = await fetch(
          `https://pokeapi.co/api/v2/pokemon-species/${searchValue.toLowerCase()}`
        );
        const data = await response.json();
        const dataCor = await responseCor.json();
        setPokemon({
          name: data.name,
          image: data.sprites.other["official-artwork"].front_default,
          type: data.types
            .map((t) => primeiraMaiuscula(t.type.name))
            .join(" / "),
          color: dataCor.color.name,
        });
        setTimeout(() => {
          setanimaBusca(true);
        }, 50);
        setanimaHome(false);
      } catch (error) {
        alert("Pokemon não encontrado");
      }
    } else {
      setPokemon(null);
      setanimaBusca(false);
      setanimaHome(false);
      setTimeout(() => {
        setanimaHome(true);
      }, 50);
    }
  };

  function primeiraMaiuscula(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
  }

  function openModal() {
    setfilterModal(!filterModal);
    setType("");

    if (filterModal === true) {
      setanimaHome(false);
      setTimeout(() => {
        setanimaHome(true);
      }, 50);
    }
  }

  const filterType = (event) => {
    setType(event.target.innerText);

    setanimaHome(false);
    setTimeout(() => {
      setanimaHome(true);
    }, 50);
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
        <Filtro openModal={openModal} filterModal={filterModal} />
      </section>
      <FiltroModal filterModal={filterModal} filterType={filterType} />

      {pokemon && <Pokemon pokemon={pokemon} animacao={animaBusca} />}

      {!pokemon && (
        <HomePokemon
          homePokemon={homePokemon}
          animacao={animaHome}
          type={type}
        />
      )}
    </div>
  );
};

export default App;
