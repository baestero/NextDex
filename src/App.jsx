import React from "react";
import "./styles/global.css";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const App = () => {
  return (
    <div className="appContainer">
      <Header />
      <Search />
    </div>
  );
};

export default App;
