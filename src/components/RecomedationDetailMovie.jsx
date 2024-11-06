import { FaMoneyBill, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { MdOutlineLanguage, MdOutlineNewReleases } from "react-icons/md";
import { formatDate } from '../utils/formatDate';
import { formatCurrency } from '../utils/formatCurrency';
import { getPriceMovie } from '../utils/getPriceMovie';
// Context
import { useFavoriteMovie } from '../context/FavoriteMovieContext';

const RecomedationDetailMovie = ({ movie }) => {
     // Check movie props
     if (!movie) {
          return <div className="flex justify-center items-center text-red-600 h-screen">Movie not Available</div>;
     }

     // Context Favorite Movie
     const { favoriteMovies, toggleFavorite } = useFavoriteMovie();

     // Check if the movie is a favorite
     const isFavorite = favoriteMovies.some((fav) => fav.id === movie.id);

     return (
          <div className="max-w-7xl mx-auto p-4 mt-10 relative">
               <div className="card md:flex-row flex-col shadow-xl bg-base-300 md:h-auto h-full">
                    <figure className="md:w-1/3 w-full">
                         <img className="w-full h-64 md:h-full object-cover" src={`${import.meta.env.VITE_TMDB_IMAGE}/${movie.poster_path}`} alt={movie.title} />
                    </figure>
                    <div className="md:w-2/3 w-full p-6">
                         <h2 className="text-2xl md:text-4xl font-bold mb-5">{movie.title}</h2>
                         <p className="text-sm lg:text-sm md:text-base mb-5">
                              {formatDate(movie.release_date)} &nbsp;|&nbsp; {movie.genres && movie.genres.map((genre) => genre.name).join(', ')} &nbsp;|&nbsp; {movie.runtime}m
                         </p>
                         <h3 className="text-xl md:text-2xl mb-4">Kilasan Singkat</h3>
                         <p className="text-sm mb-10">{movie.overview}</p>
                         <p className="flex items-center gap-x-2 text-sm md:text-base mb-5">
                              <FaRegStar className="text-lg md:text-xl" /> {movie.vote_average}
                         </p>
                         <p className="flex items-center gap-x-2 text-sm md:text-base mb-5">
                              <MdOutlineLanguage className="text-lg md:text-xl" /> {movie.spoken_languages && movie.spoken_languages.map((language) => language.name)}
                         </p>
                         <p className="flex items-center gap-x-2 text-sm md:text-base mb-5">
                              <MdOutlineNewReleases className="text-lg md:text-xl" /> {movie.status}
                         </p>
                         <p className="flex items-center gap-x-2 text-sm md:text-base mb-10">
                              <FaMoneyBill className="text-lg md:text-xl" />{formatCurrency(getPriceMovie(movie.vote_average))}
                         </p>
                         {/* Favorite button */}
                         <button
                              className={`py-3 px-3 ms-5 rounded-full ${isFavorite ? 'text-red-500' : 'text-slate-500'} bg-white absolute top-3 right-3`}
                              onClick={() => toggleFavorite(movie)}
                         >
                              {isFavorite ? <FaHeart title="Remove Favorite" /> : <FaRegHeart title="Add Favorite" />}
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default RecomedationDetailMovie;
