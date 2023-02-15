import axios from 'axios';

import { API_URL } from './config';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export const sendEmail = (formData) => {
  return api.post('/email/', formData);
};

export const login = (formData) => {
  return api.post('/auth/login', formData);
};

export const signup = (formData) => {
  return api.post('/auth/signup', formData);
};

export const getAdminContent = () => {
  return api.get('/auth/protected');
}

export const test = () => {
  return api.post('/admin/email');
}