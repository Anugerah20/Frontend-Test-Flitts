import React from 'react';
import { Link } from 'react-router-dom';

const RecomendationMovie = ({ recommendedMovies }) => {
     return (
          <div className="w-[90%] mx-auto my-10">
               <h1 className="text-xl lg:text-3xl md:text-2xl font-bold">Rekomendasi</h1>
               <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                    {recommendedMovies.length > 0 ? (
                         recommendedMovies.map((movie) => (
                              <div key={movie.id} className="card shadow-lg">
                                   <Link to={`/recomend-movie/${movie.id}`}>
                                        <img
                                             className="w-full h-48 object-cover rounded-md"
                                             src={`${import.meta.env.VITE_TMDB_IMAGE}/${movie.poster_path}`}
                                             alt={movie.title}
                                        />
                                        <div className="p-2">
                                             <h3 className="text-md font-bold">{movie.title}</h3>
                                        </div>
                                   </Link>
                              </div>
                         ))
                    ) : (
                         <p>Tidak ada rekomendasi film.</p>
                    )}
               </div>
          </div>
     );
};

export default RecomendationMovie;

