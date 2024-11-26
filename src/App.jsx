import './App.css';
import React, { useState, useEffect, Suspense, lazy } from "react";
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar';
import logo_app from './assets/images/logoApp.png';
import { useWeather } from './components/ProviderWeather.jsx';
import ProviderWeather from './components/ProviderWeather.jsx';
import AirPollution from './components/AirPollution.jsx';
import Geocode from './components/Geocode.jsx';
import SunShow from './components/SunShow.jsx';
import sunrise from './assets/images/sunset.png';
import sunset from './assets/images/sunrise.png';

// Lazy load des composants pour réduire le poids initial
const WeatherDisplay = lazy(() => import('./components/WeatherDisplay'));
const SearchBox = lazy(() => import('./components/SearchBox.jsx'));
const Footer = lazy(() => import('./components/Footer'));
const ContactUs = lazy(() => import('./components/ContactUs.jsx'));

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Gestion du mode sombre en fonction de l'utilisateur ou du système
    const userTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (userTheme === 'dark' || (!userTheme && systemTheme)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <ProviderWeather>
      <MainContent />
    </ProviderWeather>
  );
}

function MainContent() {
  const {
    catchValue,
    fetchData,
    handleChange,
    result,
    content,
    catchedValue,
  } = useWeather() || {};

  return (
    <>
      {/* Barre de navigation */}
      <Navbar src={logo_app} onClickSearch={handleChange} />

      {/* Zone de recherche */}
      {content && (
        <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
          <SearchBox catchValue={catchValue} content={content} onChange={handleChange} />
        </Suspense>
      )}

      {/* Affichage de la météo */}
      <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
        <WeatherDisplay dataWeather={result} />
      </Suspense>

      {/* Section des widgets (pollution, géocodage, soleil) */}
      <div className="w-full grid lg:grid-cols-3 place-content-center px-5 md:gap-2 lg:gap-12 lg:px-12">
        <AirPollution />
        <Geocode />
        <div className="ps-10 lg:flex flex-col flex items-center p-5 gap-10 md:gap-10 sm:flex-wrap">
          <SunShow image={sunrise} title="Sunset" />
          <SunShow image={sunset} title="Sunrise" />
        </div>
      </div>

      {/* Notifications Toast */}
      <ToastContainer 
        autoClose={3000} // Ferme automatiquement après 3 secondes
        hideProgressBar={true} // Cache la barre de progression
        newestOnTop={true} // Affiche la notification la plus récente en haut
      />

      {/* Composants supplémentaires */}
      <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
        <ContactUs />
      </Suspense>
      <Suspense fallback={<div className="flex justify-center items-center">Loading...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
