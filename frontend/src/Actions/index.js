import { fetchPosts, fetchCategories, addPostAPI } from "../utils/api";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const CHANGE_SORT = "CHANGE_SORT";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";
export const ADD_POST = "ADD_POST";

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