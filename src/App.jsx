import './App.css'; 
import React, {useState,useEffect, Suspense, lazy } from "react";
import Navbar from './components/Navbar';
import logo_app from './assets/images/logoApp.png';
import { useWeather } from './components/ProviderWeather.jsx';
import ProviderWeather from './components/ProviderWeather.jsx';
import WeatherMap from './components/WeatherMap.jsx';
import Geocode from './components/Geocode.jsx';
import WeatherForecast from './components/WeatherForecast.JSX';
import AirPollution from './components/AirPollution.jsx';
import SunShow from './components/SunShow.jsx';
import sunrise from '../src/assets/images/sunset.png';
import sunset from '../src/assets/images/sunrise.png';
// Lazy load the components
const WeatherDisplay = lazy(() => import('./components/WeatherDisplay'));
const SearchBox = lazy(() => import('./components/SearchBox.jsx'));
const Footer = lazy(() => import('./components/Footer'));
const ContactUs = lazy(() => import('./components/ContactUs.jsx'));

function App() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
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
      <Navbar src={logo_app} onClickSearch={handleChange} />
      {content && (
        <Suspense fallback={<span className=" loading loading-dots loading-lg"></span>}>
          <SearchBox catchValue={catchValue} content={content} onChange={handleChange} />
        </Suspense>
      )}
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <WeatherDisplay dataWeather={result} />
      </Suspense>
      <Suspense>
       
      </Suspense>
  
                   <div
             className=" w-full grid  lg:grid-cols-3 place-content-center px-5 md:gap-2  ">
              <AirPollution  />
              <Geocode/>
            <div className=" ps-10 lg:flex   flex-col flex items-center p-5  gap-10 md:gap-10 sm:flex-wra">
              
             <SunShow image={sunrise} />
              <SunShow image={sunset} />
             </div>
               
              {/* <WeatherWidget/> */}
              
                
              {/* <CardCarousel cards={dataArray} /> */}
          </div>    
 
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <ContactUs />
      </Suspense>
      <Suspense fallback={<span className="loading loading-dots loading-lg"></span>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
