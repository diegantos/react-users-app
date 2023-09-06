import axios from "axios";

const BASE_URL = "http://localhost:8080/users";

export const findAll = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response;
  } catch (error) {
    console.error(error);
  }
  return null;
};

export const save = async ({ username, email, password }) => {
  try {
    return axios.post(BASE_URL, {
      username,
      email,
      password,
    });
  } catch (error) {
    console.error(error);
  }
  return undefined
};

export const update = ({ id, username, email }) => {
    try {
        return axios.put(`${BASE_URL}/${id}`, {
            username,
            email,
        })
    } catch (error) {
        console.error(error)
    }
    return undefined
}
