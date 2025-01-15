import React from 'react'

const PostsCard = ({ Post }) => {
  return (
    <div className='bg-slate-300'>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-6 text-gray-800">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://via.placeholder.com/300"
            alt="Architectural blueprint"
            className="rounded-lg shadow-md"
          />
        </div>
        <h1 className="text-3xl font-serif font-bold text-center text-gray-800 mb-2">
          {Post.title}
        </h1>
        <p className="text-lg text-center leading-relaxed">
          {Post.body}
        </p>
        <p className="text-center text-gray-500 mt-4">
          Light parchment background with artistic design.
        </p>
      </div>
    </div>
  );
};

export default PostsCard;
