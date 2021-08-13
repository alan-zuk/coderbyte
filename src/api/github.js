import axios from "axios";

const BASE_URL = "https://api.github.com";

export const getUser = (username) => {
  return axios.get(`${BASE_URL}/users/${username}`);
}