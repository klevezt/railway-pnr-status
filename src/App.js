import React from "react";
import "./App.css";
import Header from "./Layout/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Layout/Main/Main";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
