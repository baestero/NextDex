import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>NextDex</h1>
      <p>Faça sua pesquisa por nome</p>
    </div>
  );
};

export default Header;
