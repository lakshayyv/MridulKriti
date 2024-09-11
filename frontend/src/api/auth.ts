import axios, { isAxiosError } from "axios";

export const checkAuth = async () => {
  try {
    const response = await axios.get("/api/v1/auth/check");
    return response.data.success;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log(err.response?.data.message);
    } else {
      console.log("Something went wrong.");
    }
    return false;
  }
};
