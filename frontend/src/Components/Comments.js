import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';
import { connect } from 'react-redux';
import Timestamp from 'react-timestamp';
import { withRouter, Link } from 'react-router-dom';
import { updateCommentVote, deleteCommentRedux } from '../Actions'
import EditCommentModal from './EditCommentModal'

class Comments extends React.Component {

    vote (id, option) {
        this.props.dispatch(updateCommentVote(id, option))
    }
    commentDelete (id) {
        this.props.dispatch(deleteCommentRedux(id))
    }

    render () {
        const { comments } = this.props
        return (
            <div>
                {console.log(comments)}
                    {(comments) && (comments.map((comment) => (
                        <Card key={comment.id} className="comment-card">
                            <CardBody>
                                <div className="comments-top">
                                    <div className="comment-space">
                                        <CardText>{comment.body}</CardText>
                                        <span className="author">by {comment.author}</span>
                                        <EditCommentModal comment={comment} />
                                    </div>
                                    <span className="card-time"><Timestamp time={comment.timestamp} /></span>
                                </div>
                                <div className="comment-buttons">
                                    <span className="comment-score">Score: {comment.voteScore}</span>
                                    <Button size="sm" className="comment-button" onClick={() => this.vote(comment.id, "upVote")}>Upvote</Button>
                                    <Button size="sm" className="comment-button" onClick={() => this.vote(comment.id, "downVote")}>Downvote</Button>
                                    <Button size="sm" className="comment-button" onClick={() => this.commentDelete(comment.id)}>Delete</Button>
                                </div>
                            </CardBody>
                        </Card>
                    )))}
            </div>
        );
    }
};

function mapStateToProps(data, ownProps) {
    let comments = data.comments
    return {
        comments
    }
}

export default withRouter(connect(mapStateToProps)(Comments));