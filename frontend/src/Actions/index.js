import { fetchPosts, fetchCategories, addPostAPI, updateVotePost, updatePostAPI } from "../utils/api";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CHANGE_SORT = "CHANGE_SORT";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const ADD_POST = "ADD_POST";
export const UP_VOTE_POST = "UP_VOTE_POST";
export const DOWN_VOTE_POST = "DOWN_VOTE_POST";
export const UPDATE_POST_REDUX = "UPDATE_POST_REDUX";

export const receivePosts = posts => ({
    type: RECEIVE_POSTS,
    posts
});

export function fetchP () {

    return function (dispatch) {
        return fetchPosts().then(
            posts => dispatch(receivePosts(posts))
        );
    };
}

export function changeSort (sortValue) {
    return {
        type: CHANGE_SORT,
        sortValue
    }
}

export const receiveCategories = categories => ({
    type: RECEIVE_CATEGORIES,
    categories
});


export function fetchC () {

    return function (dispatch) {
        return fetchCategories().then(
            categories => dispatch(receiveCategories(categories))
        );
    };
}

function addPost(post) {
    return {
        type: ADD_POST,
        post
    }
}

export const addPostRedux = post => dispatch =>
    addPostAPI(post).then(dispatch(addPost(post)));

function upVotePost(id) {
    return {
        type: UP_VOTE_POST,
        id
    };
}

function downVotePost(id) {
    return {
        type: DOWN_VOTE_POST,
        id
    };
}

export const updateVote = (id, vote) => dispatch =>
    updateVotePost(id, vote).then(response => {
        const postid = response.id;
        if (vote === "upVote") {
            dispatch(upVotePost(postid));
        } else {
            dispatch(downVotePost(postid));
        }
    });

function updatePostRedux(post) {
    return {
        type: UPDATE_POST_REDUX,
        post
    };
}

export function updatePost(id, post) {
    return function(dispatch) {
        updatePostAPI(id, post).then(post => dispatch(updatePostRedux(post)));
    };
}