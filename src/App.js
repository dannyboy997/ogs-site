import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import Library from "./components/Library";

class App extends Component {
  render() {
    return (
      <div>
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
            <Route exact path="/" component={Home} />
            <Route path="/Library" component={Library} />
          </div>
        </div>
      </div>
    );
  };
}

export default App;