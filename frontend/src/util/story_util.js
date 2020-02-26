import axios from 'axios';

export const getStories = () => {
    return axios.get('/api/stories')
};

export const writeStory = data => {
    return axios.post('/api/stories/', data)
}
export const getUserStories = id => {
    return axios.get(`/api/stories/creator/${id}`)
};
