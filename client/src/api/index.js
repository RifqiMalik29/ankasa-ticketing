import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const getAllTickets = () => axios.get(`${API_URL}/ticket`);