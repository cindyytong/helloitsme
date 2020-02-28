import { combineReducers } from 'redux';
import entities from './entities/entitites_reducer'
import session from './session_reducer';
import errors from './errors/errors_reducer';

const RootReducer = combineReducers({
    entities,
    session,
    errors
});

export default RootReducer;