import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import { withRouter, Link } from 'react-router-dom';
import { updateCommentVote } from '../Actions'

class Comments extends React.Component {

    vote (id, option) {
        this.props.dispatch(updateCommentVote(id, option))
    }

    render () {
        const { comments } = this.props
        return (
            <div>
                    {(comments) && (comments.map((comment) => (
                        <Card key={comment.id} className="comment-card">
                            <CardBody>
                                <div className="comments-top">
                                    <div className="comment-space">
                                        <CardText>{comment.body}</CardText>
                                        <span className="author">by {comment.author}</span>
                                        <Button size="sm" className="comment-edit-btn">Edit</Button>
                                    </div>
                                    <span className="card-time"><Timestamp time={comment.timestamp} /></span>
                                </div>
                                <div className="comment-buttons">
                                    <span className="comment-score">Score: {comment.voteScore}</span>
                                    <Button size="sm" className="comment-button" onClick={() => this.vote(comment.id, "upVote")}>Upvote</Button>
                                    <Button size="sm" className="comment-button" onClick={() => this.vote(comment.id, "downVote")}>Downvote</Button>
                                    <Button size="sm" className="comment-button">Delete</Button>
                                </div>
                            </CardBody>
                        </Card>
                    )))}


                    <Card>
                        <CardHeader tag="h3">Featured</CardHeader>
                        <CardBody>
                            <CardTitle>Special Title Treatment</CardTitle>
                            <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Go somewhere</Button>
                        </CardBody>
                        <CardFooter className="text-muted">Footer</CardFooter>
                    </Card>
                </div>
        );
    }
};

function mapStateToProps(data, ownProps) {
    return {
        comments: data.comments
    }
}

export default withRouter(connect(mapStateToProps)(Comments));