import React, { Component } from "react";
import logo from "./homer work.png";
import "./App.css";
import Quotes from "./Quotes";
import Lamp from "./Lamp.js"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const currentlogoclassname = this.state.working ? 'App-logo' : 'App-logo-2'
    const currentlogo = this.state.working ? "https://i.pinimg.com/originals/89/cc/37/89cc370d4ac5c360a4ab1a83156e5d91.png" : "https://seeklogo.com/images/H/homer-logo-2B4611ED99-seeklogo.com.png"
    const currentworking = this.state.working ? "Homer work" : "Let's Party!"
    return (
      <div className="App">
        <header className="App-header">
          <img src={currentlogo} className={currentlogoclassname} alt="logo" />
          <h1>{currentworking}</h1>
          <button
            onClick={this.handleClick}
          >What does Homer?
</button>
        </header>
        <Lamp on />
        <Lamp />
        <Quotes />
      </div >
    );
  }


}

export default App;
