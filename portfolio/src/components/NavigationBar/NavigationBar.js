import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import Projects from "../Projects/Projects";

class NavigationBar extends Component{
  render(){
    return (
      <div>
        <h1>Inside navbar</h1>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
        </Switch>
      </div>

    );
  }
}

export default NavigationBar;
