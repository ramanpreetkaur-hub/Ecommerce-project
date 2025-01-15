import { useEffect, useState } from "react";
import { getPostsData } from "../services/Posts.service";

export const usePosts = () => {
  const [PostsDetails, setPostsDetails] = useState([]);
  const [Loading, setLoading] = useState(false);
  
  console.log({ getPostsData });
  useEffect(() => {
    setLoading(true);
    getPostsData()
      .then((Posts) => {
        setPostsDetails(Posts);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error); 
        setLoading(false);
      });
  }, []);

  return [PostsDetails, Loading];
};
