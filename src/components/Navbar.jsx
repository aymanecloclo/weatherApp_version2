import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoSearch } from 'react-icons/io5';
import { Link } from 'react-router-dom'; // Bien que nous n'utilisions plus react-router pour cette partie
import Logo from './Logo';
import { useWeather } from './ProviderWeather';

const Navbar = ({ src }) => {
  const [nav, setNav] = useState(false);
  const { handleChange } = useWeather();
    const [scrolled, setScrolled] = useState(false); // État pour le défilement
  const menuRef = useRef();

  const handleNav = () => {
    setNav(!nav);
  };
  // Ajouter un gestionnaire de défilement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setNav(false); // Fermer le menu si l'utilisateur clique à l'extérieur
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const navItems = [
    { id: 1, text: 'Home', path: '#home' }, // Lien vers la section avec id="home"
    { id: 2, text: 'Weather Conditions', path: '#forecast' }, // Lien vers la section avec id="forecast"
    { id: 3, text: 'Géocodage', path: '#graph' }, // Lien vers la section avec id="graph"
    { id: 5, text: 'Contact us', path: '#contact' }, // Lien vers la section avec id="contact"
  ];

  return (
<div className={`flex items-center gap-5 mx-0 w-full md:max-h-[9%] max-h-16 fixed top-0 left-0 overflow-hidden md:pe-20 z-50 transition-all duration-300 ${
  scrolled ? 'bg-navbar-scroll shadow-md' : 'bg-transparent'
}`}>

      {/* Logo */}
      <div className="logo w-full px-5 md:hidden lg:block">
        <Logo src={src} className="max-w-1/2 rounded-full object-cover max-h-28 block" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex md:fixed md:top-0 md:right-10 order-8 items-center justify-center gap-2">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-4 py-2 m-2 cursor-pointer duration-300 flex items-center text-slate-100 hover:text-gray-700 hover:font-semibold relative text-lg w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-nowrap"
          >
            <a href={item.path}>{item.text}</a> {/* Lien vers la section correspondant à chaque item */}
          </li>
        ))}
        <li key={"srch_icon"} className="flex items-center cursor-pointer justify-center text-slate-100 hover:text-gray-700">
          <IoSearch size={20} onClick={(e) => handleChange(e)} />
        </li>
      </ul>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="flex gap-4 z-20 md:hidden order-4 pe-5">
        {nav ? null : (
          <>
            <AiOutlineMenu size={25} className="text-slate-100 cursor-pointer hover:text-gray-200" />
            <IoSearch size={25} onClick={(e) => handleChange(e)} className="text-slate-100 cursor-pointer hover:text-gray-200" />
          </>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        ref={menuRef}
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full bg-gradient-to-r from-cyan-400 to-blue-400 ease-in-out duration-500 z-10 shadow-black shadow-xl'
            : 'ease-in-out w-[60%] duration-50 top-0 bottom-0 left-[-100%] relative'
        }
      >
        <li key="closeBtn" className="relative">
          <AiOutlineClose onClick={handleNav} size={25} className="text-slate-100 absolute top-1 right-2 cursor-pointer" />
        </li>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-4 py-2 m-2 cursor-pointer duration-300 flex items-center text-slate-100 hover:text-gray-700 hover:font-semibold relative text-lg w-fit after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:bg-yellow-400 after:w-full after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300 text-nowrap"
          >
            <a href={item.path}>{item.text}</a> {/* Lien vers la section correspondant à chaque item */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
