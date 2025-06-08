import React from "react";
import styles from "./FiltroModal.module.css";

const FiltroModal = ({ filterModal, filterType }) => {
  return (
    <div className={`${styles.modal} ${filterModal ? styles.ativo : ""}`}>
      <div
        className={`${styles.buttonContainer} ${
          filterModal ? styles.ativo : ""
        }`}
      >
        <button onClick={filterType}>Normal</button>
        <button onClick={filterType}>Fire</button>
        <button onClick={filterType}>Grass</button>
        <button onClick={filterType}>Water</button>
        <button onClick={filterType}>Flying</button>
        <button onClick={filterType}>Bug</button>
      </div>
    </div>
  );
};

export default FiltroModal;
