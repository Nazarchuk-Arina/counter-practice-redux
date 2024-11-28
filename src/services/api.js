import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const fetchUsers = async () => {
  const { data } = await axios.get("/users?limit=200");
  return data.users;
};

export const fetchUsersById = async (id) => {
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

export const fetchPostsByUserId = async (id) => {
  const { data } = await axios.get(`/posts/user/${id}`);
  return data.posts;
};
