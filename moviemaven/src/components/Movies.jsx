import {useEffect, useState} from "react";
import SearchIcon from '../assets/search.svg'
import MovieCard from "./MovieCard";
import axios from "axios";

const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
const Movies =() =>{
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    const searchMovies = async (title) => {
        const res = await axios.get(`${API_URL}&s=${title}`);
        const data = await res.data;
        setMovies(data.Search);
    }

    useEffect(()=> {
        searchMovies('Spider')
    }, []);
    return(
        <div  id='Search' className="font-[Roboto Slab] bg-background lg:p-16 flex flex-col mx-auto">
        <br/>    
            <h1 className="text-justify mx-auto flex xl:text-7xl text-5xl font-bold my-gradient">Moviemaven</h1>
            <div className="md:w-[70%] w-[100%] m-8 flex mx-auto p-6 shadow-xl rounded-2xl bg-dark ">
                <input className="border-none bg-dark text-[#a1a1a1] w-full text-2xl outline-none font-[Raleway]"
                placeholder="Search for Movies"
                value={searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                onKeyDown={(e)=> {if (e.key === 'Enter'){searchMovies(searchTerm)}}}
                />
                <img src={SearchIcon} className="w-8 h-8 cursor-pointer"
                alt ="search"
                onClick={()=> searchMovies(searchTerm)} />
            </div>
            {
                movies?.length >0
                ?(<div className="w-[100%] mx-auto flex flex-wrap justify-center mt-10 ">
                    {movies.map((movie) =>  (
                        <MovieCard movie={movie}/>
                    ))}
                </div>)
                :(
                    <div className="m-12 flex flex-wrap mx-auto w-[100%]">
                        <h2 className="text-3xl mx-auto text-gold">No movies found</h2>
                    </div>
                )


            } 
        </div>
    );
}

export default Movies