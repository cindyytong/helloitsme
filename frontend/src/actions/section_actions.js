import { writeSection } from "../util/sections_util";

export const RECEIVE_SECTION = "RECEIVE_SECTION";

export const receiveSection = section => {
    debugger
    return {
        type: RECEIVE_SECTION,
        section
    }
}

export const composeSection = data => dispatch => {
    return writeSection(data)
        .then(section => {
            debugger
            return dispatch(receiveSection(section))})
        .catch(err => console.log(err))
}