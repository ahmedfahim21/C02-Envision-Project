import React from 'react';
import {useState} from 'react';
import MovieModal from './MovieModal';

const MovieCard= ({ movie })=> {
  const [themovie, settheMovie] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const openModal = () => {
    setShowMore(true);
  };

  const handleClick = async () => {
    await settheMovie(movie.imdbID);
    openModal();
    console.log("clicked")
  }
  return (
    <div>
    <div className="relative w-[310px] h-[460px] sm:m-4 m-0 my-4 border-none transition-all shadow-sm hover:shadow-md hover:scale-105">
    <div className="absolute w-[100%] h-[100%] overflow-hidden">
      <img src ={ movie.Poster!== 'N/A'? movie.Poster: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png'} alt={movie.Title} className="w-full h-full overflow-hidden" />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 z-20"></div>
    </div>
    <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-90 p-4">
      <span className="block font-semibold text-xs text-gray-300 uppercase tracking-wide">{movie.Type}</span>
      <h3 className="mt-1 font-medium text-base text-white">{movie.Title}</h3>
    </div>
    <button onClick={handleClick} className="absolute inset-0 z-50"></button>
    
  </div>
  {showMore && <MovieModal  movie={themovie} state={showMore} />}
  </div>

  );
}
export default MovieCard;

