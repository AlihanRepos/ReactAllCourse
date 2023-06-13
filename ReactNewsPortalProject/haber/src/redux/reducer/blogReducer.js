import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function blogReducer(state = initialState.blogs, action) {
    switch (action.type) {
        case types.GET_BLOG_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}