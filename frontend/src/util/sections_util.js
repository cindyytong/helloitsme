import axios from 'axios';


// export const getSectionsByStory = (storyId) => {
//     return axios.get()
// }

export const writeSection = data => {
    return axios.post("/api/sections/", data)
}