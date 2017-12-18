import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Navigation from './Navigation'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { updatePost } from '../Actions'
import { fetchSinglePost } from "../utils/api";


class EditPost extends React.Component {
    state = {
        title: '',
        body: '',
        author: '',
        category: '',
        id: this.props.value
    }
    componentDidMount() {
        fetchSinglePost(this.state.id).then(response => this.setState({
            title: response.title,
            body: response. body,
            author: response.author,
            category: response.category,
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const post = {
            title: this.state.title,
            body: this.state.body
        }
        this.props.dispatch(updatePost(this.state.id, post));
        this.props.history.push("/")
    }
    handleTitleChange = (e) => {
        this.setState({title: e.target.value})
    }
    handleBodyChange = (e) => {
        this.setState({body: e.target.value})
    }
    render() {
        let { categories } = this.props

        return (
            <div>
                <Navigation />
                <div className="page-section">
                    <div className="page-top">
                        <h1 className="page-header">Edit Post</h1>
                    </div>
                    <Form className="post-form" onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="title" className="label-name">Title</Label>
                            <Input type="text" name="title" id="title" placeholder="Enter title" value={this.state.title} onChange={this.handleTitleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="body" className="label-name">Body</Label>
                            <Input type="textarea" name="body" id="body" placeholder="Enter text" value={this.state.body} onChange={this.handleBodyChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="body" className="label-name">Author</Label>
                            <Input disabled type="text" name="author" id="author" placeholder="Enter author name" value={this.state.author} onChange={this.handleAuthorChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="categorySelect" className="label-name">Category</Label>
                            <Input disabled type="select" name="select" id="categorySelect" value={this.state.category} onChange={this.handleCategoryChange}>
                                {categories && categories.map(function (category) {
                                    return (<option key={category.name}>{category.name}</option>)
                                })}
                            </Input>
                        </FormGroup>

                        <Button id="form-submit-btn">Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(data) {

    if (data.categories.categories) {
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

export default withRouter(connect(mapStateToProps)(EditPost))