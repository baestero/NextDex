import React from "react";
import styles from "./Input.module.css";

const Input = ({ searchValue, setSearchValue }) => {
  return (
    <input
      className={styles.searchInput}
      type="text"
      placeholder="Buscar Pokemon"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default Input;
