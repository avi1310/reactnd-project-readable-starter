import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from "./Navigation";
import Post from "./Post";
import Sort from "./Sort";
import { fetchPosts } from "../utils/api";
import { fetchP } from "../Actions"

class App extends Component {
    state = {
        posts: null,
        flag: false
    }
    componentWillMount () {
        this.submit()
    }
    componentDidMount () {
        const {store} = this.props
        store.subscribe(() => {
            this.setState(() => {
                posts: store.getState()
            })
        })
    }
    submit = () => {
        this.props.store.dispatch(fetchP())
        this.setState({
            flag: true
        })
    }

  render() {
    return (
      <div className="App">
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

export default App;
