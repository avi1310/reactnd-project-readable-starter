import React, { Component } from 'react';
import '../App.css';
import { fetchP, fetchC } from "../Actions"
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import RootFeed from './RootFeed'
import CategoryView from './CategoryView'
import AddPost from './AddPost'
import EditPost from './EditPost'
import DetailedPost from './DetailedPost'
import PageNotFound from './PageNotFound'
import { withRouter } from 'react-router-dom'


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
      const { categories, posts } = this.props

    return (
      <div className="App">
          <Switch>
        <Route exact path="/" render={() => (
            <RootFeed flag={this.state.flag} />
        )} />
          <Route exact path="/addpost" render={() => (
              <AddPost />
          )} />
          {(posts)&&(posts.map((post) => (
                  <Route key={post.id} exact path={`/${post.category}/${post.id}/edit`} render={() => (
                      <EditPost value={post.id} />
                  )} />
              ))
          )}
          {(posts)&&(posts.map((post) => (
                  <Route key={post.id} exact path={`/${post.category}/${post.id}`} render={() => (
                      <DetailedPost value={post.id} />
                  )} />
              ))
          )}
          {(categories)&&(categories.map((category) => (
                  <Route key={category.name} exact path={`/${category.path}`} render={() => (
                      <CategoryView value={category.name} flag={this.state.flag} />
                  )} />
              ))
          )}
              <Route path='*' component={PageNotFound} />
          </Switch>
      </div>
    )
  }
}

function mapStateToProps(data) {
    if(data.categories) {
        return {
            categories: data.categories.categories,
            posts: data.posts
        }
    }
    else {
        return {
            categories: data.categories,
            posts: data.posts
        }
    }
}

export default withRouter(connect(mapStateToProps)(App))
