import {
    RECEIVE_POSTS
} from '../Actions'

const initialState = {
    posts: null
}

function posts (state = initialState, action) {

    const { posts } = action

    switch (action.type) {
            case RECEIVE_POSTS:
                return {
                    ...state,
                    posts,
                }
            default:
                return state;
    }
}

export default posts;