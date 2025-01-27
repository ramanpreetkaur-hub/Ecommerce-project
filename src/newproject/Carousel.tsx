import { useEffect, useState } from 'react';

import project from '../assets/project.png';
import web3 from '../assets/web3.png';
import ink from '../assets/ink.png'

const images = [
  project,
  web3,
  ink,
];

const Carousel = () => {
 
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  useEffect(()=>{
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    },3000);
    return () => clearInterval(interval)
  })

  return (
    <div className="relative h-screen w-full flex items-center justify-center  ">
    
      <button
        className="prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none z-10"
        onClick={prevImage}
      >
        &#10094;
      </button>

      {/* Image Container */}
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={images[currentIndex]}
          alt={`carousel-${currentIndex}`}
          className="w-[50%] h-full object-cover"
        />
        {/* Overlay Content */}
        <div className="absolute top-1/4 right-8 w-1/2 pr-16 text-right animate-bounce">
          <p className="text-xl sm:text-3xl lg:text-4xl font-bold text-right">
            Your products{' '}
            <span className="text-black bg-orange-300 rounded-md border-orange-300 border-2 px-2 ">
              Delivered
            </span>
            <br />
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-right">
            To Your Door Step.
          </p>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            Say goodbye to the hassle of shopping! <br />
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        className="next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 focus:outline-none z-10"
        onClick={nextImage}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;