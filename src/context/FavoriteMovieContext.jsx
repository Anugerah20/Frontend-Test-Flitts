import React, { createContext, useContext, useState, useEffect } from 'react';

// context
const FavoriteMovieContext = createContext();

// Hook custom context
export const useFavoriteMovie = () => useContext(FavoriteMovieContext);

// Provider context
export const FavoriteMovieProvider = ({ children }) => {
     const [favoriteMovies, setFavoriteMovies] = useState(() => {
          const storedFavorite = localStorage.getItem('favoriteMovies');
          return storedFavorite ? JSON.parse(storedFavorite) : [];
     });

     // Update localStorage
     useEffect(() => {
          localStorage.setItem('favoriteMovies', JSON.stringify(favoriteMovies));
     }, [favoriteMovies]);

     // Function add or remove movie from favorite
     const toggleFavorite = (movie) => {
          setFavoriteMovies((prevFavorites) => {
               const isFavorite = prevFavorites.some((fav) => fav.id === movie.id);
               if (isFavorite) {
                    return prevFavorites.filter((fav) => fav.id !== movie.id);
               } else {
                    return [...prevFavorites, movie];
               }
          });
     };
     return (
          <FavoriteMovieContext.Provider value={{ favoriteMovies, toggleFavorite }}>
               {children}
          </FavoriteMovieContext.Provider>
     );
};
