import React from 'react'
import { useParams } from "react-router-dom";

interface FirstComponentProps {
  image: string;
  Name: string;
  lifejourney: string;
  followers: string;
  posts: string;
  like: string;
}

const FirstComponent: React.FC<FirstComponentProps> = (props) => {
  const { image, Name, lifejourney, followers, posts, like } = props;
  const params = useParams<{ id: string }>(); 





  return (
    <div>
<div
    key="1"
    className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900"
  >
    <div className="rounded-t-lg h-60 overflow-hidden">
      <img
        alt="Mountain"
        className="object-cover object-top w-full"
        src="https://media.istockphoto.com/id/1330424071/photo/large-group-of-people-at-a-concert-party.jpg?s=612x612&w=0&k=20&c=LwdiOCBqbfICjQ3j5AzwyugxmfkbyfL3StKEQhtx4hE="
      />
    </div>
    <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
      <img
        alt="looking front"
        className="object-cover object-center h-32"
        src={image} 
      />
    </div>
    <div className="text-center mt-2">
      <h2 className="font-semibold">
        {Name}
      </h2>
      <p className="text-gray-500">
       {lifejourney}
      </p>
    </div>
    <ul className="py-4 mt-2 text-gray-700 flex items-center justify-around">
      <li className="flex flex-col items-center justify-around">
        <svg
          className="w-4 fill-current text-blue-900"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
        <div>
        {followers}
        </div>
      </li>
      <li className="flex flex-col items-center justify-between">
        <svg
          className="w-4 fill-current text-blue-900"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z" />
        </svg>
        <div>
        {like}
        </div>
      </li>
      <li className="flex flex-col items-center justify-around">
        <svg
          className="w-4 fill-current text-blue-900"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
        </svg>
        <div>
          {posts}
        </div>
      </li>
    </ul>
    <div className="p-4 border-t mx-8 mt-2">
      <a href="https://www.instagram.com/karanaujla/?hl=en">
      <button className="w-1/2 block mx-auto rounded-full bg-gray-900 hover:shadow-lg font-semibold text-white px-6 py-2 hover:bg-sky-700 ">
        Follow
      </button>
      </a>
    </div>
  </div></div>
  )
}

export default FirstComponent;