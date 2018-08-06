import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./Login/";
import MainContainer from "./MainContainer/MainContainer.js";
// import User from "./MainContainer/UserContainer/UserContainer.js";
// import Battle from "./MainContainer/BattleContainer/BattleContainer.js";
import { Route, Switch } from "react-router-dom";

const My404 = () => {
  return(
    <div>
      <h1>404'd!</h1>
    </div>
  )
}

class App extends Component {
  render() {
    console.log("SUP NERD")
    return (
      <main>
        <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/supersmashed" component={ MainContainer } />
        <Route component={My404} /> 
        </Switch>
      </main>
    )
  }
}


export default App;