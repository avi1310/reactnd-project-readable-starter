import { fetchPosts } from "../utils/api";

export const RECEIVE_POSTS = "RECEIVE_POSTS";

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