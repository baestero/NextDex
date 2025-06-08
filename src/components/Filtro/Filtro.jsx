import React from "react";
import styles from "./Filtro.module.css";

const Filtro = ({ openModal, filterModal }) => {
  return (
    <>
      <div
        onClick={openModal}
        className={`${styles.filterContainer} ${
          filterModal ? styles.ativo : ""
        }`}
      >
        <img src="/icons/filter.svg" alt="" />
      </div>
    </>
  );
};

export default Filtro;
