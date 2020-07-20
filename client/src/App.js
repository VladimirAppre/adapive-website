import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./Pages/home";
import About from "./Pages/about";
import Contacts from "./Pages/contacts";
import Blog from "./Pages/blog";
import Header from "./Components/header/header";

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contacts' component={Contacts}/>
          <Route exact path='/blog' component={Blog}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
