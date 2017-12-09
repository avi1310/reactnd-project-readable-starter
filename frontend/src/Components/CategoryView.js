import React, { Component } from 'react';
import Navigation from "./Navigation";
import Post from "./Post";
import Sort from "./Sort";
import { connect } from 'react-redux'

class CategoryView extends Component {

    render() {
        const categorySel = this.props.value
        console.log(categorySel)
        return (

            <div>
                <Navigation value={categorySel} />
                <div className="page-section">
                    <div className="page-top">
                        <h1 className="page-header">{categorySel}</h1>
                        <Sort/>
                    </div>
                    {(this.props.flag)?(
                        <Post category={categorySel}/>
                    ):(
                        <h2>No posts to show</h2>

                    )}
                </div>
            </div>
        );
    }
}


export default CategoryView;
