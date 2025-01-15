import React from "react";

import PostsCard from "../pages/PostsCard";
import { usePosts } from "./Posts";

const Datacustomhooks = () => {
  const [PostsDetails, Loading] = usePosts();

  const Poststorender = PostsDetails.slice(0, 10);
  console.log("Poststorender", Poststorender);
  return (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3   gap-4">
        {Poststorender.map((Post) => {
          return <PostsCard Post={Post} />;
        })}
      </div>
      {Loading && <div className="text-6xl text-black  ">Loading...</div>}
    </div>
  );
};

export default Datacustomhooks;
