// import {
//     RECEIVE_SESSION_ERRORS,
//     RECEIVE_CURRENT_USER
// } from "../actions/session_actions";


const StoriesReducer = (initialState = {}, action) => {
    Object.freeze(initialState);
    switch (action.type) {
        default:
            return initialState;
    }
};

export default StoriesReducer;
