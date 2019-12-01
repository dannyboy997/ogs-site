import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Library from "./components/Library";

class App extends Component {
  render() {
    return (
      <div className="app-page">
        <div className="span">
          <div className="app-nav">
            <div className="header">
              <h2>OGS</h2>
            </div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/Library">Game Library</a></li>
            </ul>
          </div>
          <div className="app-content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Library" component={Library} />
            </Switch>
          </div>
        </div>
        <div class="app-footer">
          Footer
        </div>
      </div>
    );
  };
}

export default App;