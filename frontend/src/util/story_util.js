import axios from 'axios';

export const getStories = () => {
    return axios.get('/api/stories')
};

export const getUserStories = id => {
    return axios.get(`/api/stories/user/${id}`)
};

export const writeStory = data => {
    return axios.post('/api/stories/', data)
}