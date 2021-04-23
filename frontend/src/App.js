import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Home } from "./components/home.component"
import { Edit } from "./components/edit.component"
import { Create } from "./components/create.component"

function App() {
  return (
    <Router>
      <div>
        <h2>GTD APP</h2>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/edit/:id">
          <Edit />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </div>
    </Router>
  );
}

export default App;
