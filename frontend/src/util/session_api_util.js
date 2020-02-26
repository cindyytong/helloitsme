import axios from 'axios';

// set common auth token in header so if user leaves but doesn't sign out when they return they will still be signed in

export const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = token;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
};

export const signup = (userData) => {
    debugger
    return axios.post('/api/users/register', userData);
};

export const login = (userData) => {
    debugger
    return axios.post('/api/users/login', userData);
};