const axios = require('axios');

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

export const createClient = async (endpoint, body) => {
  const { data } = await api.create(endpoint, body);
  return data;
}

export const getAllClients = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}


export const getClientsById = async (endpoint) => {
  const { data } = await api.get(endpoint);
  return data;
}

export const updateClient = async (endpoint, body) => {
  const { data } = await api.put( endpoint, body);
  return data;
}