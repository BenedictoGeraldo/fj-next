import axios from "axios";

// Create Axios instance dengan base config
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000",
  timeout: 10000, // 10 detik
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor (jalan sebelum request dikirim)
axiosInstance.interceptors.request.use(
  (config) => {
    // Log request untuk debugging
    console.log("📤 Request:", config.method?.toUpperCase(), config.url);

    // Contoh: Tambah token otomatis (kalau ada)
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    console.error("❌ Request Error:", error);
    return Promise.reject(error);
  }
);

// Response Interceptor (jalan setelah dapat response)
axiosInstance.interceptors.response.use(
  (response) => {
    // Log response untuk debugging
    console.log("📥 Response:", response.status, response.config.url);
    return response;
  },
  (error) => {
    // Handle error global
    if (error.response) {
      // Server respond dengan error (4xx, 5xx)
      console.error(
        "❌ Response Error:",
        error.response.status,
        error.response.data
      );
    } else if (error.request) {
      // Request dikirim tapi tidak ada response (network error)
      console.error("❌ Network Error:", error.message);
    } else {
      // Error lain
      console.error("❌ Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
