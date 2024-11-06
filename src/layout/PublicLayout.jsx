import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Loading from '../components/Loading';

const PublicLayout = () => {
     const navigation = useNavigate();
     const isPageLoading = navigation.action === 'loading';
     return (
          <>
               <Header />
               {isPageLoading ? (
                    <Loading />
               ) : (
                    <main className="min-h-screen">
                         <Outlet />
                    </main>
               )}
          </>
     );
};

export default PublicLayout;
