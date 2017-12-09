import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navigation from "./Navigation";
import Post from "./Post";
import Sort from "./Sort";
import { fetchP, fetchC } from "../Actions"
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'
import RootFeed from './RootFeed'
import CategoryView from './CategoryView'


class App extends Component {
    state = {
        flag: false,
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
      const { categories } = this.props

    return (
      <div className="App">
          {console.log(this.props)}
        <Route exact path="/" render={() => (
            <RootFeed flag={this.state.flag} />
        )} />
          {(categories)&&(categories.map((category) => (
                  <Route key={category.name} exact path={`/category/${category.path}`} render={() => (
                      <CategoryView value={category.name} flag={this.state.flag} />
                  )} />
              ))
          )}
      </div>
    )
  }
}

function mapStateToProps(data) {
    if(data.categories.categories) {
        return {
            categories: data.categories.categories.categories
        }
    }
    else {
        return {
            categories: data.categories.categories
        }
    }
}

export default connect(mapStateToProps)(App)
