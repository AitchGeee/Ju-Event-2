import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://admin.hamzaal.com',
    // other custom settings
});

// Function to get new access token using refresh token
const refreshAccessToken = async () => {
    try {
        // Replace with your refresh token endpoint and logic
        const response = await axios.post('/refresh-token', {
            refreshToken: 'YOUR_REFRESH_TOKEN',
        });
        return response.data.accessToken;
    } catch (error) {
        console.error('Error refreshing access token:', error);
        return null;
    }
};

// Request interceptor to add the auth token
axiosInstance.interceptors.request.use(
    async (config) => {
        const accessToken = 'YOUR_ACCESS_TOKEN'; // Get this from where you store your token
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Response interceptor to handle token refresh logic
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Check if the status code indicates that the token expired
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            const newAccessToken = await refreshAccessToken();
            if (newAccessToken) {
                axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
                return axiosInstance(originalRequest);
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;