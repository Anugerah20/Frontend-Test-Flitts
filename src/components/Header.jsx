import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import NavList from './NavList';

const Header = () => {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toggleMenu = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     return (
          <div className="navbar bg-base-100">
               <div className="navbar-start flex justify-between w-full">
                    {/* Logo or Branding */}
                    <NavLink to="/" className="btn btn-ghost text-2xl">
                         StreamFlix Nabil
                    </NavLink>

                    {/* Hamburger menu for small screens */}
                    <div className="lg:hidden">
                         <div className="dropdown dropdown-left">
                              <button
                                   onClick={toggleMenu}
                                   className="btn btn-ghost">
                                   {isMenuOpen ? (
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M6 18L18 6M6 6l12 12"
                                             />
                                        </svg>
                                   ) : (
                                        <svg
                                             xmlns="http://www.w3.org/2000/svg"
                                             className="h-5 w-5"
                                             fill="none"
                                             viewBox="0 0 24 24"
                                             stroke="currentColor">
                                             <path
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  strokeWidth="2"
                                                  d="M4 6h16M4 12h8m-8 6h16"
                                             />
                                        </svg>
                                   )}
                              </button>
                              {isMenuOpen && (
                                   <ul
                                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                        <NavList />
                                   </ul>
                              )}
                         </div>
                    </div>
               </div>
               {/* Navigation for large screens */}
               <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                         <NavList />
                    </ul>
               </div>
          </div>
     );
};

export default Header;
