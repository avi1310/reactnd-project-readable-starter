import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addCommentRedux } from '../Actions'

const uuidv4 = require("uuid-v4");

class AddComment extends React.Component {
    state = {
        body: '',
        author: '',
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const comment = this.state
        comment.timestamp = Date.now()
        comment.id = uuidv4();
        comment.parentId = this.props.postId
        this.props.dispatch(addCommentRedux(comment));
        this.setState({
            body: '',
            author: ''
        })
    }
    handleBodyChange = (e) => {
        this.setState({body: e.target.value})
    }
    handleAuthorChange = (e) => {
        this.setState({author: e.target.value})
    }
    render() {
        return (
            <div>
                <Card className="comment-card">
                    <Form className="comment-form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Input type="textarea" name="body" id="body" placeholder="Enter comment" value={this.state.body} onChange={this.handleBodyChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="author" id="author" placeholder="Enter author name" value={this.state.author} onChange={this.handleAuthorChange} />
                        </FormGroup>
                        <Button id="form-submit-btn">Add Comment</Button>
                    </Form>
                </Card>
            </div>
        );
    }
}


export default withRouter(connect()(AddComment))