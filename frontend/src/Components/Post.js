import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
    CardTitle, CardText } from 'reactstrap';

const Post = (props) => {
    return (
        <div>
            <Card>
                <CardHeader>Category</CardHeader>
                <CardBody>
                    <div className="title-area">
                        <CardTitle>Title <span className="author">by Author</span></CardTitle>
                        <span className="card-time">40 mins</span>
                    </div>
                    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                </CardBody>
                <CardFooter>
                    <div className="vote-controls">
                        <Button className="up-vote">Upvote</Button>
                        <Button className="down-upvote">Downvote</Button>
                        <span className="post-score">Score: 45</span>
                    </div>
                    <span className="total-comments">5 Comments</span>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Post;