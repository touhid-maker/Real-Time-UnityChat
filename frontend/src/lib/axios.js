import axios  from 'axios'


export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:4080/api" : import.meta.env.VITE_API_URL,
    withCredentials: true,
})