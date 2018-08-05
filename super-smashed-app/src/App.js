import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";

const My404 = () => {
  return(
    <div>
      <h1>404'd!</h1>
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
      <Route component={My404} /> 
      </Switch>
    </main>
  )
}

export default App;
