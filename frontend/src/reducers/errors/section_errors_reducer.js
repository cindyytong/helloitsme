import {
  RECEIVE_SECTION_ERRORS
} from "../../actions/section_actions";

const _nullErrors = [];

const SectionErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SECTION_ERRORS:
      return Object.values(action.errors);
    default:
      return state;
  }
};

export default SectionErrorsReducer;
