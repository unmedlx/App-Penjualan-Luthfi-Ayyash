import './App.css';

import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route component={Login} path="/login" />
            <Route component={Home} path="/" />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
