import React, { useState, useEffect } from 'react'
import CardMovie from '../components/CardMovie';
import axios from 'axios';
import { getPriceMovie } from '../utils/getPriceMovie';

const ShowMovie = () => {
     const [movies, setMovies] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     const [currentPage, setCurrentPage] = useState(1);
     const [totalPage, setTotalPage] = useState(0);
     const [searchQuery, setSearchQuery] = useState('');
     const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

     const apiKey = import.meta.env.VITE_API_KEY_TMDB;
     const baseURL = import.meta.env.VITE_BASE_URL_TMDB;

     // Update debounce search movie
     useEffect(() => {
          const timer = setTimeout(() => {
               setDebouncedSearchQuery(searchQuery);
          }, 500);
          return () => clearInterval(timer);
     }, [searchQuery]);

     useEffect(() => {
          try {
               setLoading(true);
               const fetchMovies = async () => {
                    const apiMovie = searchQuery ? `${baseURL}/search/movie` : `${baseURL}/discover/movie`;
                    const params = {
                         api_key: apiKey,
                         language: 'id-ID',
                         region: 'ID',
                         page: currentPage,
                         query: debouncedSearchQuery,
                    };
                    const response = await axios.get(apiMovie, { params });
                    setMovies(response.data.results);
                    setTotalPage(response.data.total_pages);
               }
               fetchMovies();
          } catch (error) {
               console.error(error);
               setError('Gagal menampilkan film, silahkan coba lagi nanti');
          } finally {
               setLoading(false);
          }
     }, [currentPage, debouncedSearchQuery]);

     // Setting Pagination Next
     const handleNextPage = () => {
          if (currentPage < totalPage) setCurrentPage(prev => prev + 1);
     };

     // Setting Pagination Previus
     const handlePrevPage = () => {
          if (currentPage > 1) setCurrentPage(prev => prev - 1);
     };

     // Handle Search Movie
     const handleSearchMovie = async (e) => {
          setSearchQuery(e.target.value);
          setCurrentPage(1);
          console.log(e.target.value);
     };
     return (
          <>
               {loading && <div className="flex justify-center items-center h-screen">Loading...</div>}
               {error && <div className="flex justify-center items-center text-red-600 h-screen">{error}</div>}
               {/* Search Movie */}
               <div className="flex justify-center items-center my-10">
                    <input
                         className="lg:w-2/5 md:w-2/5 w-4/5 h-12 rounded-md px-4 text-md border-slate-900 border-2"
                         type="text" name="search" id="search" placeholder="Search movie..."
                         onChange={handleSearchMovie}
                         autoComplete="off"
                         value={searchQuery}
                    />
               </div>

               <div className="min-h-screen grid lg:grid-cols-4 md:grid-cols-2">
                    {movies.map((movie) => (
                         <CardMovie key={movie.id} movie={movie} price={getPriceMovie(movie.vote_average)} />
                    ))}
               </div>
               {/* Pagination */}
               <div className="flex flex-wrap gap-x-4 justify-center items-center my-10">
                    <button
                         className={`w-24 h-10 rounded-md ${currentPage === 1 ? 'bg-gray-400 text-white' : 'bg-slate-800 text-white'}`}
                         onClick={handlePrevPage}
                         disabled={currentPage === 1}
                    >Prev Page</button>
                    <span>Page {currentPage} of {totalPage}</span>
                    <button className={`w-24 h-10 rounded-md ${currentPage === totalPage ? 'bg-gray-400 text-white' : 'bg-slate-800 text-white'}`}
                         onClick={handleNextPage}
                         disabled={currentPage === totalPage}
                    >
                         Next Page
                    </button>
               </div>
          </>
     );
};

export default ShowMovie;
