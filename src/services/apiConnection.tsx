// src/services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 5000,
});

// Pode adicionar interceptors para manipular requests e responses, se necessário
api.interceptors.request.use(
  (config) => {
    // Você pode adicionar tokens de autenticação aqui
    // config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Lidar com erros globais, como redirecionar se não autenticado
    return Promise.reject(error);
  }
);

export default api;
