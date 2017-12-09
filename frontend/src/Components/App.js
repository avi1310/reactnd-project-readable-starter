import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from "./Navigation";
import Post from "./Post";
import Sort from "./Sort";
import { fetchP, fetchC } from "../Actions"
import { connect } from 'react-redux'

class App extends Component {
    state = {
        flag: false
    }
    componentWillMount () {
        this.getData()
    }
    getData = () => {
        this.props.dispatch(fetchP())
        this.props.dispatch(fetchC())
        this.setState({
            flag: true
        })
    }

  render() {
    return (
      <div className="App">
          {console.log(this.props)}
        <Navigation/>
        <div className="page-section">
          <div className="page-top">
              <h1 className="page-header">All Posts</h1>
              <Sort/>
          </div>
            {(this.state.flag)?(
                <Post/>
            ):(
                <h2>No posts to show</h2>

            )}

        </div>
      </div>
    );
  }
}

function mapStateToProps(data) {
    return {
        store: data
    }
}

export default connect(mapStateToProps)(App)
