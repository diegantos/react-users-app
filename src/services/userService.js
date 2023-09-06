import axios from "axios";

const BASE_URL = "http://localhost:8080/users";

export const findAll = async (BASE_URL) => {
  try {
    const response = await axios.get();
    return response;
  } catch (error) {
    console.log(error);
  }
  return null;
};

export const save = async ({username, email, password}) => {
    try {
        return axios.post(BASE_URL, {
            username,
            email,
            password,
        })
    } catch (error) {
        
    }
}