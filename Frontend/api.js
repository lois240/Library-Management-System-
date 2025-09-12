import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const register = (data) => API.post('/auth/register', data);
export const login = (data) => API.post('/auth/login', data);
export const addBook = (data) => API.post('/books', data);
export const borrowBook = (id) => API.post(`/books/${id}/borrow`);
export const getBooks = () => API.get('/books');
// Add more as needed