const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

export const getAllClients = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}


export const getClientsById = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}