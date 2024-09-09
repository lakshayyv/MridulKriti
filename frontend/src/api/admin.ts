import axios, { isAxiosError } from "axios";

export const signin = async (email: string, password: string) => {
  try {
    const payload = { email, password };
    const response = await axios.post("/api/v1/admin/signin", payload);
    return response.data.success;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log(err.response?.data.message);
    } else {
      console.log("Something went wrong.");
    }
  }
};
