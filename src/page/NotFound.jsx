import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
     return (
          <div className="flex flex-col justify-center items-center min-h-screen text-center">
               <h1 className="flex text-xl lg:text-3xl md:text-2xl font-bold text-blue-900">
                    404 | Halaman yang kamu cari tidak ditemukan
               </h1>
               <Link to="/" className="flex justify-center items-center mt-3 text-blue-900 underline text-sm">Kembali ke halaman utama</Link>
          </div>
     );
};

export default NotFound;
