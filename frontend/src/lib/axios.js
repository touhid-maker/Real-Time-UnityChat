import axios  from 'axios'


export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "development" ? "http://localhost:4080/api" : "https://real-time-unitychat.onrender.com/api",
    withCredentials: true,
})
