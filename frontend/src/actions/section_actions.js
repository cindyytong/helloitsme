import { writeSection } from "../util/sections_util";

export const RECEIVE_SECTION = "RECEIVE_SECTION";
export const RECEIVE_SECTION_ERRORS = 'RECEIVE_SECTION_ERRORS';

export const receiveSection = section => {
    return {
        type: RECEIVE_SECTION,
        section
    }
}

export const receiveSectionErrors = errors => {
    return {
        type: RECEIVE_SECTION_ERRORS,
        errors
    }
}

export const composeSection = data => dispatch => {
    return writeSection(data)
        .then(section => {
            return dispatch(receiveSection(section))})
        .catch(err => { 
            return dispatch(receiveSectionErrors(err.response.data))})
}