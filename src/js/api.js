import axios from 'axios';

import { API_URL } from './config';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export const login = (formData) => {
  return api.post('/auth/login', formData);
};

export const signup = (formData) => {
  return api.post('/auth/signup', formData);
};

export const test = () => {
  return api.post('/admin/email');
}