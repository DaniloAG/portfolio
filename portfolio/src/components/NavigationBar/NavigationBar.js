import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import {
  Header
} from "./NavigationBar.style";

class NavigationBar extends Component{
  render(){
    return (
      <div>
        <Header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
            </ul>
          </nav>
        </Header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>

    );
  }
}

export default NavigationBar;
