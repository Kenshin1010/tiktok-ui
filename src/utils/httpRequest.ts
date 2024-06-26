import axios from "axios";

// console.log(process.env.REACT_APP_BASE_URL);

const httpRequest = axios.create({
  baseURL: `https://tiktok.fullstack.edu.vn/api/`,
});

export const get = async (path: string, options = {}) => {
  const response = await httpRequest.get(path, options);
  return response.data;
};

export default httpRequest;
