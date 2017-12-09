import { combineReducers } from 'redux'

import {
    RECEIVE_POSTS,
    RECEIVE_CATEGORIES,
    CHANGE_SORT
} from '../Actions'

function posts (state = {}, action) {

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