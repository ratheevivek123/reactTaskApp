import axios from "axios";
import { baseURL } from "../Utils.jsx/utils";

export const verifyToken = async () => {
  try {
    const response = await axios.get(`${baseURL}/api/users/verify-token`, {
      withCredentials: true,
    });

    return response.data; // Returns true if the token is valid
  } catch (error) {
    return false; // Returns false if the token is invalid
  }
};
