import React from "react";



      const JikanUI = ({anime}) => (
        
        <div className="anime-card border  rounded-lg  bg-slate-500 border-t-white border-t-2 border-r-2 border-white border-b-2 shadow-white shadow-md border-b-black 
        -600 border-l-2 border-l-black
        -600 text-white mr-12 ml-10 w-[45vh] mt-10 space-y-4 pb-2 ">
          {/* Anime Title */}
           
           
          <h2 className="text-lg font-semibold font-serif mb-2  mt-2 ">{anime.
title}</h2>

          {/* Anime Image */}
          {anime.images.jpg.image_url && (
            <img
              src={anime.images.jpg.image_url}
              alt={anime.title }
              className="w-[50vh] h-[35vh] mb-4  sm-[40vh] sm-h[30vh] md:[30] md:[25]" />
          )}

          {/* Description */}
          {/* <p className="text-white-700 mb-2 ">
            Synopsis: {anime.synopsis}
          </p> */}

          

          {/* Air Dates
          <p className="text-gray-700 mb-2">
            <strong>Aired:</strong> {anime.aired?.string || "Unknown"}
          </p> */}

        

          {/* Score */}
          <p className="text-white mb-2 bg-slate-700 bg-opacity-25">
            <button className="bg-lime-600 rounded-lg p-1 hover:bg-slate-400">Score</button> : {anime.score } (Rated by {anime.scored_by || 0} users)
          </p>

          <p className="text-white mb-2  bg-opacity-25 ">
            <button className="bg-slate-700 rounded-lg p-1 ml-2  hover:bg-slate-400">Rating</button> : {anime.rating }
          </p>

          
          {anime.trailer.url && (
            <a
              href={anime.trailer.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline mt-2 block"
            >
                <button className=" rounded-xl  text-white p-3 hover:bg-black hover:text-white font-bold"> Watch Trailer</button>
            </a>
          )}
           
           
        </div>
        
      );
    

export default JikanUI;


 



