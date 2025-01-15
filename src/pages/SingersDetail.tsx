
import React from 'react'

const SingersDetail = () => {
  return (
    <div><div
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
        src="data:image/webp;base64,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"
      />
    </div>
    <div className="text-center mt-2">
      <h2 className="font-semibold">
        Karanaujla
      </h2>
      <p className="text-gray-500">
      18 January 1997
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
        1M
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
        9M
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
          15
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

export default SingersDetail
