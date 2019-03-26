import React, { Component } from "react";
import logo from "./avion.png";
import "./App.css";

import Quotes from "./Quotes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travels</h1>
        </header>
        <Quotes />
      </div>
    );
  }

  
}

export default App;
