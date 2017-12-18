import { combineReducers } from 'redux'

import {
    RECEIVE_POSTS,
    RECEIVE_CATEGORIES,
    CHANGE_SORT,
    ADD_POST
} from '../Actions'

function posts (state = [], action) {

    const { posts, post } = action

    switch (action.type) {
            case RECEIVE_POSTS:
                return posts;
        case ADD_POST:
                return [...state, post]
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
    categories
})