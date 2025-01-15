import { useCharacter } from "./Character";
import JikanUI from "../pages/JikanUI";
import character from "../assets/character.jpg";
import rgk from "../assets/rgk.png";
import random from "../assets/random.jpg";
import shig from "../assets/shig.jpg";
import { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Fetching = () => {
  const [animeDetails, pagination, loading, fetchPage] = useCharacter();
  const images = [rgk, shig, random, character];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);  

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-slate-950">
  
      <div className="flex justify-between bg-slate-400 hover:bg-black">
        <div className="text-white p-3 text-4xl flex ml-5">Animate</div>
        <div className="flex gap-10 mr-7 p-3 text-center text-white">
          <div className="hover:bg-slate-400 rounded-lg p-2 w-28 text-center">
            About
          </div>
          <div className="hover:bg-slate-400 rounded-lg p-2 w-28 text-center">
            Episodes
          </div>
          <div className="hover:bg-slate-400 rounded-lg p-2 w-32 text-center">
            Releasing date
          </div>
          <div className="hover:bg-slate-400 rounded-lg p-2 w-28 text-center">
            Blog
          </div>
        </div>
      </div>

    
      <div className="relative flex flex-col items-center">
        <div className="relative w-full h-screen">
          <img
            src={images[currentImageIndex]}
            alt="Animated"
            className="w-full h-screen object-cover"
          />
          
          <button
            className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-300"
            onClick={handlePrev}
          >
            &#10094;
          </button>
          
          <button
            className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-gray-300"
            onClick={handleNext}
          >
            &#10095;
          </button>
        </div>

        
        <div className="flex justify-center space-x-2 mt-4">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentImageIndex
                  ? "bg-blue-500"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            ></span>
          ))}
        </div>
      </div>

      
      {loading && <div className="text-6xl text-black">Loading...</div>}

      
      <div className="p-2 grid grid-cols-4  gap-4">
        {animeDetails.length > 0 ? (
          animeDetails.map((anime) => (
            <JikanUI key={anime.id} anime={anime} />
          ))
        ) : (
          !loading && <div className="text-white">No data available</div>
        )}
      </div>
      <Pagination pagination={pagination} onPageChange={fetchPage} />    

      
      <div className="text-white mt-10  hover:text-gray-400">
        Movies are available on:
      </div>
      <div className="flex gap-28 justify-center mt-9 pb-16 border-b-white border-b-4">
        <div className="text-white hover:text-gray-400">YouTube</div>
        <div className="text-white hover:text-gray-400">MaxPlayer</div>
        <div className="text-white  hover:text-gray-400">Netflix</div>
        <div className="text-white  hover:text-gray-400">Disney</div>
      </div>
    </div>
  );
};

export default Fetching;
