import { combineReducers } from 'redux'

import {
    RECEIVE_POSTS,
    RECEIVE_CATEGORIES,
    CHANGE_SORT,
    ADD_POST,
    UP_VOTE_POST,
    DOWN_VOTE_POST,
    UPDATE_POST_REDUX,
    RECEIVE_COMMENTS,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT
} from '../Actions'

function posts (state = [], action) {

    const { posts, post, id } = action

    switch (action.type) {
        case RECEIVE_POSTS:
            return posts;
        case ADD_POST:
            return [...state, post]
        case UP_VOTE_POST:
            let postupvote = state.map(p => {
                if (p.id === id) {
                    ++p.voteScore;
                }
                return p;
            });
            return postupvote;
        case DOWN_VOTE_POST:
            let postdownvote = state.map(p => {
                if (p.id === id) {
                    --p.voteScore;
                }
                return p;
            });
            return postdownvote;
        case UPDATE_POST_REDUX:
            let newpost = state.map(p => {
                if (p.id === post.id) {
                    p = post;
                }
                return p;
            });
            return newpost;
        default:
            return state;

    }
}

function categories (state = {}, action) {

    const { categories } = action

    switch (action.type) {
        case RECEIVE_CATEGORIES:
            return {
                ...state,
                categories,
            }
        default:
            return state;
    }
}

function comments(state = [], action) {
    const {comments, comment, id} = action;
    switch (action.type) {
        case RECEIVE_COMMENTS: {
            return comments;
        }
        case UP_VOTE_COMMENT:
            let commentupvote = state.map(c => {
                if (c.id === id) {
                    ++c.voteScore;
                }
                return c;
            });
            return commentupvote;
        case DOWN_VOTE_COMMENT:
            let commentdownvote = state.map(c => {
                if (c.id === id) {
                    --c.voteScore;
                }
                return c;
            });
            return commentdownvote;
        default:
            return state;
    }
}

function sort(state = {sortValue: "time"}, action) {
    const { sortValue } = action

    switch (action.type) {
        case CHANGE_SORT:
            return {
                ...state,
                sortValue,
            }
        default:
            return state
    }
}

export default combineReducers({
    sort,
    posts,
    categories,
    comments
})