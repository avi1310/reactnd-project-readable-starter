import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import Navigation from './Navigation';
import Comments from './Comments'
import { votePost, fetchSinglePost } from '../utils/api';
import { withRouter, Link } from 'react-router-dom'
import { updateVote, getAllComments } from '../Actions'


class DetailedPost extends Component {

    state = {
        post: {}
    }

    componentWillMount () {

        const matchId = (element) => element.id === this.props.value

        this.setState({
            post: this.props.posts.find(matchId)
        })

        this.props.dispatch(getAllComments(this.props.value))
    }
    vote (id, option) {
        this.props.dispatch(updateVote(id, option))
    }
    render() {
        console.log(this.props);
        const { post } = this.state
        return (
            <div>
                <Navigation />
                <div className="page-section">
                    <div className="page-top">
                        <h1 className="page-header">Detailed Post</h1>
                    </div>
                    <Card className="detailed-post">
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
                            <span className="total-comments">{post.commentCount} Comment(s)</span>
                            <div className="vote-controls">
                                <Button className="up-vote" onClick={() => this.vote(post.id, "upVote")}>Upvote</Button>
                                <Button className="down-vote" onClick={() => this.vote(post.id, "downVote")}>Downvote</Button>
                                <span className="post-score">Score: {post.voteScore}</span>
                            </div>
                        </CardFooter>
                    </Card>
                    <Comments/>
                </div>
            </div>
        )
    }
};

function mapStateToProps(data) {
    return {
        comments: data.comments,
        posts: data.posts
    }
}

export default withRouter(connect(mapStateToProps)(DetailedPost))
