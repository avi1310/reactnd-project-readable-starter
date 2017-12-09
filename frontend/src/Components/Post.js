import React, { Component } from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import { votePost } from '../utils/api';

class Post extends Component {

    vote (id, option) {
        votePost(id, option)
    }

    render() {
        const { posts } = this.props
        {console.log(posts);}
        return (
            <div>
                {(posts) ? (posts.map((post) => (
                    <Card key={post.id}>
                        <CardHeader>{post.category}</CardHeader>
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
                                <Button className="down-vote">Downvote</Button>
                                <span className="post-score">Score: {post.voteScore}</span>
                            </div>
                            <span className="total-comments">{post.commentCount} Comment(s)</span>
                        </CardFooter>
                    </Card>))) : (<span></span>)}
            </div>
        )
    }
};

function mapStateToProps(data) {

    if(data.posts.posts) {
        data.posts.posts = data.posts.posts.sort(function (a, b) {
            if(data.sort.sortValue === "time") {
                return b.timestamp - a.timestamp
            }
            else {
                return b.voteScore - a.voteScore;
            }
        })
    }
    return {
        posts: data.posts.posts,
        sort: data.sort.sortValue
    }
}

export default connect(mapStateToProps)(Post)
