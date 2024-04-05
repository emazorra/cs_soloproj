import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./components/home.jsx";
import LoginForm from "./components/login.jsx";

function App() {
  // const [] = useState("");
  //what do i need as state for my stuff?

  // const url = 'http://localhost:3000';

  //     fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => console.log('res: ', res));

  return (
    <React.StrictMode>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </div>
      </Router>
    </React.StrictMode>
  );
}

export default App;
