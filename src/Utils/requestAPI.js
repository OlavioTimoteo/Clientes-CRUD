const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

export const getAllClientes = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}
