import React from "react";
import styles from "./Search.module.css";

const Search = ({ buscar, searchValue }) => {
  return (
    <>
      <div onClick={() => buscar(searchValue)} className={styles.lupaContainer}>
        <img className={styles.lupa} src="public\icons\lupa.svg" alt="" />
      </div>
    </>
  );
};

export default Search;
