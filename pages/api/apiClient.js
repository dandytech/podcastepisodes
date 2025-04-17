import axios from "axios";

// Create axios instance with base URL from env
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Reusable GET request handler
export const getData = async (endpoint) => {
  try {
    const response = await axiosClient.get(endpoint);
    return response.data.data;
  } catch (error) {
    if (error.response && error.response.status === 500) {
      console.error("Error response:", error.response.data.message);
      throw new Error("There’s an unknown issue fetching the data");
    }
    console.error(
      "Error response:",
      error.response?.data?.message || error.message
    );
    throw new Error(
      error.response?.data?.message || "An unexpected error occurred"
    );
  }
};

export default axiosClient;
