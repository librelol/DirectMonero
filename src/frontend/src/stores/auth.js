import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || '',
  }),
  actions: {
    async register(username, password) {
      try {
        const response = await axios.post('/api/register', { username, password });
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.error('Error registering user:', error);
      }
    },
    async login(username, password) {
      try {
        const response = await axios.post('/api/login', { username, password });
        this.token = response.data.token;
        localStorage.setItem('token', this.token);
      } catch (error) {
        console.error('Error logging in:', error);
      }
    },
    logout() {
      this.token = '';
      localStorage.removeItem('token');
    },
  },
});