import axios from 'axios';

export const getStories = () => {
    return axios.get('/api/stories')
};

export const getStory = id => {
    return axios.get(`/api/stories/${id}`)
}

// encodeURI(sent.toLowerCase());

// export const getStoryByTitle = title => {
//     let encodedTitle = encodeURI(title.toLowerCase());
//     return axios.get(`/api/stories/${encodedTitle}`)
// }

export const writeStory = data => {
    return axios.post('/api/stories/', data)
}
export const getUserStories = id => {
    return axios.get(`/api/stories/creator/${id}`)
};
