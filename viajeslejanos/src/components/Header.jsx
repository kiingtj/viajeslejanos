import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const isActive = (path) => {
    return location.pathname === path ? 'text-yellow-500 font-bold' : 'text-gray-700';
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/assets/images/logo.svg" alt="Logo de ViajesLejanos" className="h-8 mr-2" />
          <span className="text-2xl font-bold text-yellow-500">ViajesLejanos</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-lg text-gray-700 focus:outline-none">
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`md:flex space-x-8 ${isMenuOpen ? 'block absolute top-full left-0 h-screen w-full bg-white shadow-lg' : 'hidden'} md:block`}>
          <div className="mt-3 flex flex-col md:flex-row md:space-x-8 md:items-center">
            <Link to="/" className={`${isActive('/')} hover:text-yellow-500 block px-4 py-2 md:border-none border-b border-yellow-400`}>Inicio</Link>
            <div className="relative">
              <button 
                onClick={toggleDropdown} 
                className={`${isActive('/destinos')} hover:text-yellow-500 w-full text-left px-4 py-2 md:border-none flex items-center border-b border-yellow-400`}
              >
                Destinos
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 10l6 6 6-6" />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute md:left-0 bg-white md:border border-yellow-400 shadow-lg md:mt-1 rounded-md z-10 w-full md:w-auto h-screen md:h-auto p-4 md:p-0">
                  <Link to="/economicos" className="block px-4 py-2  rounded hover:text-yellow-500 hover:bg-gray-100 whitespace-nowrap bg-yellow-500 text-white">
                    Viajes Económicos
                  </Link>
                  <Link to="/aventura" className="block px-4 py-2 text-gray-700 rounded hover:text-yellow-500 hover:bg-gray-100">
                    Aventura
                  </Link>
                </div>
              )}
            </div>
            <Link to="/mochileros" className={`${isActive('/mochileros')} hover:text-yellow-500 block px-4 py-2 md:border-none border-b border-yellow-400`}>Mochileros</Link>
            <Link to="/reseñas" className={`${isActive('/reseñas')} hover:text-yellow-500 block px-4 py-2 md:border-none border-b border-yellow-400`}>Reseñas</Link>
            <Link to="/contacto" className={`${isActive('/contacto')} hover:text-yellow-500 block px-4 py-2 md:border-none border-b border-yellow-400`}>Contacto</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
