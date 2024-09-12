import axios, { isAxiosError } from "axios";

export const upload = async (
  title: string,
  description: string,
  image: string
) => {
  try {
    const payload = { title, description, image };
    const response = await axios.post("/api/v1/image/upload", payload);
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

export const fetchAll = async () => {
  try {
    const response = await axios.get("/api/v1/image/all");
    return response.data.message;
  } catch (err) {
    if (isAxiosError(err)) {
      console.log(err.response?.data.message);
    } else {
      console.log("Something went wrong.");
    }
    return false;
  }
};
