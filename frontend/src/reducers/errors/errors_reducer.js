import { combineReducers } from "redux";

import SessionErrorsReducer from "./session_errors_reducer";
import SectionErrorsReducer from './section_errors_reducer';

export default combineReducers({
  session: SessionErrorsReducer,
  section: SectionErrorsReducer
});
