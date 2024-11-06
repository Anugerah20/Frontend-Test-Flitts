import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecomedationDetailMovie from '../components/RecomedationDetailMovie';

const RecomendationDetail = () => {
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     const { id } = useParams();
     const [movie, setMovie] = useState(null);

     const apiKey = import.meta.env.VITE_API_KEY_TMDB;
     const baseURL = import.meta.env.VITE_BASE_URL_TMDB;

     useEffect(() => {
          const fetchrecomendationDetail = async () => {
               try {
                    setLoading(true);
                    const response = await axios.get(`${baseURL}/movie/${id}?api_key=${apiKey}&language=en-US`);
                    setMovie(response.data);
               } catch (error) {
                    setError('Error fetching Recomendation Detail Movie');
                    console.error(error);
               } finally {
                    setLoading(false);
               }
          };

          fetchrecomendationDetail();
     }, [id]);
     return (
          <>
               {loading && <div className="flex justify-center items-center h-screen">Loading...</div>}
               {error && <div className="flex justify-center items-center text-red-600 h-screen">{error}</div>}
               <RecomedationDetailMovie movie={movie} id={id} />
          </>
     );
};

export default RecomendationDetail;
