import React, { Component } from 'react';
import Navigation from "./Navigation";
import Post from "./Post";
import Sort from "./Sort";

class RootFeed extends Component {

    render() {
        return (
            <div>
                <Navigation/>
                <div className="page-section">
                    <div className="page-top">
                        <h1 className="page-header">All Posts</h1>
                        <Sort/>
                    </div>
                    {(this.props.flag)?(
                        <Post/>
                    ):(
                        <h2>No posts to show</h2>

                    )}
                    {console.log(this.props)}
                </div>
            </div>
        );
    }
}

export default RootFeed;
