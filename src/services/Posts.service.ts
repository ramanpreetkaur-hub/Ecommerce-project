import axios from "axios";
export const getPostsData = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/Posts"
  ); 
  const Posts = response.data;
  return Posts;
};
