import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import StoriesReducer from './stories_reducer';

const EntitiesReducer = combineReducers({
    users: UsersReducer,
    stories: StoriesReducer
});

export default EntitiesReducer;