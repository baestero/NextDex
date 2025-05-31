import React from "react";
import styles from "./Search.module.css";

const Search = ({ buscar, searchValue, setSearchValue }) => {
  return (
    <>
      <div className={styles.searchContainer}>
        <div
          onClick={() => buscar(searchValue)}
          className={styles.lupaContainer}
        >
          <img className={styles.lupa} src="public\icons\lupa.svg" alt="" />
        </div>

        <input
          className={styles.searchInput}
          type="text"
          placeholder="Buscar Pokemon"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <div className={styles.filterContainer}>
          <img src="public\icons\filter.svg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Search;
