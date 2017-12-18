import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import { votePost } from '../utils/api';
import { withRouter, Link } from 'react-router-dom'
import { updateVote, fetchC, fetchP } from '../Actions'

class Post extends Component {

    componentWillMount () {
        this.getData()
    }
    getData = () => {
        this.props.dispatch(fetchP())
        this.props.dispatch(fetchC())
    }
    vote (id, option) {
        this.props.dispatch(updateVote(id, option))
    }

    render() {
        const { posts } = this.props
        return (
            <div>
                {(posts) ? (posts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader className="post-card-header">
                            <span>{post.category}</span>
                            <Link to={`/editpost/${post.id}`}><Button color="secondary" size="sm">Edit</Button></Link>
                        </CardHeader>
                        <CardBody>
                            <div className="title-area">
                                <CardTitle>{post.title} <span className="author">by {post.author}</span></CardTitle>
                                <span className="card-time"><Timestamp time={post.timestamp} /></span>
                            </div>
                            <CardText>{post.body}</CardText>
                        </CardBody>
                        <CardFooter>
                            <div className="vote-controls">
                                <Button className="up-vote" onClick={(pid = post.id) => this.vote(pid, "upVote")}>Upvote</Button>
                                <Button className="down-vote" onClick={(pid = post.id) => this.vote(pid, "downVote")}>Downvote</Button>
                                <span className="post-score">Score: {post.voteScore}</span>
                            </div>
                            <span className="total-comments">{post.commentCount} Comment(s)</span>
                        </CardFooter>
                    </Card>))) : (<span></span>)}
            </div>
        )
    }
};

function mapStateToProps(data, ownProps) {
    let postsData = []
    if(data.posts) {
        postsData = data.posts

        if(ownProps.category) {
            postsData = postsData.filter((post) => post.category === ownProps.category ).sort(function (a, b) {
                if(data.sort.sortValue === "time") {
                    return b.timestamp - a.timestamp
                }
                else {
                    return b.voteScore - a.voteScore;
                }
            })
        }
        else {
            postsData = postsData.sort(function (a, b) {
                if(data.sort.sortValue === "time") {
                    return b.timestamp - a.timestamp
                }
                else {
                    return b.voteScore - a.voteScore;
                }
            })
        }
    }
    return {
        posts: postsData,
        sort: data.sort.sortValue
    }
}

export default withRouter(connect(mapStateToProps)(Post))
