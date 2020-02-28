import { } from "../util/sections_util";

export const RECEIVE_Section = "RECEIVE_Section";

export const receiveSection = section => {
    return {
        type: RECEIVE_Section,
        section
    }
}

export const composeSection = data => dispatch => {
    return writeSection(data)
        .then(section => {
            return dispatch(receiveSection(section))})
        .catch(err => console.log(err))
}