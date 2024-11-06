import React from 'react';
import { FaMoneyBill, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useFavoriteMovie } from '../context/FavoriteMovieContext';
import { formatCurrency } from '../utils/formatCurrency';

const CardMovie = ({ movie, price }) => {
     // Set Favorite Movie
     const { favoriteMovies, toggleFavorite } = useFavoriteMovie();
     const isFavorite = favoriteMovies.some((fav) => fav.id === movie.id);

     return (
          <div className="w-[90%] mx-auto border rounded-md mt-10 relative">
               <img className="w-full h-48 object-cover" src={`${import.meta.env.VITE_TMDB_IMAGE}/${movie.poster_path}`} alt={movie.title} />
               <div className="p-4">
                    <h2 className="text-2xl font-bold mb-4">{movie.title}</h2>
                    <p className="flex items-center gap-x-2 text-sm mb-2"><FaMoneyBill className="text-xl" />{formatCurrency(price)}</p>
                    <p className="flex items-center gap-x-2 text-sm mb-6"><FaRegStar className="text-xl" /> {movie.vote_average}</p>
                    <Link
                         className="bg-slate-800 text-white py-2 px-2 rounded"
                         to={`/movie/${movie.id}`}
                         state={{ price }}
                    >
                         Detail Movie
                    </Link>
                    {/* Favorite button */}
                    <button
                         className={`py-3 px-3 ms-5 rounded-full ${isFavorite ? 'text-red-500' : 'text-slate-500'} bg-white absolute top-3 right-3`}
                         onClick={() => toggleFavorite(movie)}
                    >
                         {isFavorite ? <FaHeart title="Remove Favorite" /> : <FaRegHeart title="Add Favorite" />}
                    </button>
               </div>
          </div>
     );
};

export default CardMovie;
