import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
  timeout: 1000 * 10, // 10Seg
})

export default axiosInstance
