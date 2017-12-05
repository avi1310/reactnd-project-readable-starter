import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from "./Navigation";
import Post from "./Post";
import Sort from "./Sort";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className="page-section">
          <div className="page-top">
              <h1 className="page-header">All Posts</h1>
              <Sort/>
          </div>
          <Post/>
        </div>
      </div>
    );
  }
}

export default App;
