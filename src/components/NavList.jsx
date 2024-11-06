import React from 'react'
import { NavLink } from 'react-router-dom';
import { useBalanceMovie } from '../context/BalanceMovieContext';
import { formatCurrency } from '../utils/formatCurrency';

const links = [
     { id: 1, url: '/', text: 'Movie' },
     { id: 2, url: 'favorite', text: 'Favorite' },
];

const NavList = () => {
     const { balanceMovie } = useBalanceMovie();
     return (
          <>
               {links.map((link) => {
                    const { id, url, text } = link;
                    return (
                         <li key={id}>
                              <NavLink to={url} className="hover:underline mx-2">
                                   {text}
                              </NavLink>
                         </li>
                    );
               })}
               <li className="flex flex-row justify-center items-center text-sm font-semibold">
                    Saldo Anda:<span className="flex">{formatCurrency(balanceMovie)}</span>
               </li>
          </>
     );
};

export default NavList;
