import React from 'react'
import {useState,useEffect} from 'react';
import axios from 'axios';

function MovieModal({movie,state}) {
    
    const [showMore, setShowMore] = useState(state);
    const [themovie, settheMovie] = useState([]); 

    const handleClick = async (movie) => {
      const API_URL = 'http://www.omdbapi.com/?apikey=5be58ebd';
      const res = await axios.get(`${API_URL}&i=${movie}`);
      const data = await  res.data;
      // console.log(data);
      settheMovie(data);
    }

    const closeModal = () => {
        setShowMore(false);
  };
  useEffect(()=> {
    handleClick(movie)
},[movie]);

  return (
    <>{showMore &&
    <div className="fixed block top-0 left-0 z-10 w-[100%] h-[100%] overflow-auto backdrop-blur-xl">
      <button className="w-full h-full opacity-100" onClick={closeModal}>
      <div className="bg-gray-800 bg-opacity-90 p-10 sm:p-20 z-10 w-[90%] sm:w-[80%] mx-auto my-[10%] text-white rounded-lg shadow-md">
        <div className='flex-row sm:flex justify-center'>
          <h2 className='my-gradient font-medium text-2xl sm:text-4xl p-2'>{themovie.Title}</h2>
          <span className='text-black p-1 mx-6 my-auto text-xs bg-slate-50 rounded-md'>{themovie.Rated}</span>
        </div>
        <p className='p-2 my-4 text-md sm:text-lg'>{themovie.Plot}</p>
        <p className='p-2 text-md sm:text-lg'><span className='font-bold'>Languages: </span>{themovie.Language}</p>
        <p className='p-2 text-md sm:text-lg'><span className='font-bold'>Cast: </span>{themovie.Actors}</p>
        <p className='p-2 text-md sm:text-lg'><span className='font-bold'>IMDB Rating: </span>{themovie.imdbRating}</p>
        <p className='p-2 text-md sm:text-lg'><span className='font-bold'>Duration: </span>{themovie.Runtime}</p>
      </div>
      </button>
    </div>}:{<div className='hidden'></div>}</>
  )
}

export default MovieModal