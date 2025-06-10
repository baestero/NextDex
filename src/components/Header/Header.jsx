import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 id="tittle">NextDex</h1>
      <p id="description">Faça sua pesquisa por nome ou ID</p>
    </div>
  );
};

export default Header;
