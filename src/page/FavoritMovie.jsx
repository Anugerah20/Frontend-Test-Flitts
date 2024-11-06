import React from 'react';
import { useFavoriteMovie } from '../context/FavoriteMovieContext';
import CardMovie from '../components/CardMovie';
import { getPriceMovie } from '../utils/getPriceMovie';

const FavoritMovie = () => {
     const { favoriteMovies } = useFavoriteMovie();
     return (
          <>
               <h2 className="text-xl lg:text-3xl md:text-2xl font-bold mt-10 text-center">Daftar Film Favorit</h2>
               <div className="max-w-7xl grid lg:grid-cols-3 md:grid-cols-3 p-4">
                    {favoriteMovies.length > 0 ? (
                         favoriteMovies.map(movie => (
                              <CardMovie key={movie.id} movie={movie} price={getPriceMovie(movie.vote_average)} />
                         ))
                    ) : (
                         <p className="text-gray-500">Belum ada film favorit.</p>
                    )}
               </div>
          </>
     );
};

export default FavoritMovie;
