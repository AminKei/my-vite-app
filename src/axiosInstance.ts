import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Loading state management
let activeRequests = 0;
const showLoader = () => {
  activeRequests++;
  document.body.classList.add("loading");
};
const hideLoader = () => {
  activeRequests--;
  if (activeRequests === 0) {
    document.body.classList.remove("loading");
  }
};

axiosInstance.interceptors.request.use(
  (config) => {
    showLoader();
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    hideLoader();
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    hideLoader();
    return response;
  },
  (error) => {
    hideLoader();
    if (error.response) {
      const { status, data } = error.response;

      switch (status) {
        case 400:
          console.error("Bad Request:", data);
          break;
        case 401:
          localStorage.removeItem("token");
          window.location.href = "/login";
          break;
        case 403:
          console.error("Forbidden:", data);
          break;
        case 404:
          console.error("Not Found:", data);
          break;
        case 500:
          console.error("Server Error:", data);
          break;
        default:
          console.error("Error:", data);
      }

      // Show error notification
      const errorMessage = data.message || "An error occurred";
      if (typeof window.showNotification === "function") {
        window.showNotification(errorMessage, "error");
      } else {
        alert(errorMessage);
      }

      return Promise.reject(data);
    }

    // Network errors or other issues
    const errorMessage = "Network error or server is unreachable";
    if (typeof window.showNotification === "function") {
      window.showNotification(errorMessage, "error");
    } else {
      alert(errorMessage);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
