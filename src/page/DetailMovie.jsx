import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useBalanceMovie } from '../context/BalanceMovieContext';
import CardSingleMovie from '../components/CardSingleMovie';
import { useLocation, useParams } from 'react-router-dom';

const DetailMovie = () => {
     const { id } = useParams();
     const [movie, setMovie] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);
     const [purchased, setPurchased] = useState(false);

     const apiKey = import.meta.env.VITE_API_KEY_TMDB;
     const baseURL = import.meta.env.VITE_BASE_URL_TMDB;

     // State Link
     const { state } = useLocation();

     // Context Price movie
     const { balanceMovie, deductBalanceMovie } = useBalanceMovie();
     const price = state?.price;

     // Check balance and purchase movie
     const handlePurchase = () => {
          if (balanceMovie >= price) {
               deductBalanceMovie(price);
               setPurchased(true);
               toast.success(`Berhasil membeli film ${movie.title}`);
          } else {
               toast.info(`Saldo tidak cukup untuk membeli film ${movie.title}`);
          }
     };

     useEffect(() => {
          try {
               setLoading(true);
               const fetchDetailMovie = async () => {
                    const response = await axios.get(`${baseURL}/movie/${id}`, {
                         params: {
                              api_key: apiKey,
                         }
                    });
                    setMovie(response.data);
               };
               fetchDetailMovie();
          } catch (error) {
               console.error(error);
               setError('Gagal menampilkan detail film, silahkan coba lagi nanti');
          } finally {
               setLoading(false);
          }
     }, []);
     return (
          <>
               {loading && <div className="flex justify-center items-center h-screen">Loading...</div>}
               {error && <div className="flex justify-center items-center text-red-600 h-screen">{error}</div>}
               {movie && !loading && (
                    <CardSingleMovie movie={movie} price={price} handlePurchase={handlePurchase} purchased={purchased} />
               )}
          </>
     );
};

export default DetailMovie;
