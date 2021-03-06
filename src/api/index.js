import Axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => Axios.get(url);

export const createPost = (newPost) => Axios.post(url, newPost);

export const updatePost = (id, updatedPost) =>
  Axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => Axios.delete(`${url}/${id}`);

export const likePost = (id) => Axios.patch(`${url}/${id}/likePost`);
