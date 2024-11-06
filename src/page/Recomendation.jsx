import React, { useState, useEffect } from 'react';
import RecomendationMovie from '../components/RecomendationMovie';

const Recomendation = ({ currentMovieId }) => {
     const [recommendedMovies, setRecommendedMovies] = useState([]);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     const apiKey = import.meta.env.VITE_API_KEY_TMDB;
     const baseURL = import.meta.env.VITE_BASE_URL_TMDB;

     useEffect(() => {
          const fetchRecommendedMovies = async () => {
               try {
                    setLoading(true);
                    const response = await fetch(`${baseURL}/movie/${currentMovieId}/recommendations?language=en-US&page=1&api_key=${apiKey}`);

                    if (!response.ok) {
                         throw new Error(`Error: ${response.status}`);
                    }

                    const data = await response.json();
                    setRecommendedMovies(data.results);
               } catch (error) {
                    console.error(error);
                    setError("Error fetching recomendation movie");
               } finally {
                    setLoading(false);
               }
          };

          if (currentMovieId) {
               fetchRecommendedMovies();
          }
     }, [currentMovieId]);
     return (
          <>
               {loading && <div className="flex justify-center items-center h-screen">Loading...</div>}
               {error && <div className="flex justify-center items-center text-red-600 h-screen">{error}</div>}
               <RecomendationMovie recommendedMovies={recommendedMovies} />
          </>
     );
};

export default Recomendation;
