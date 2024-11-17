import './App.css'; 
import React, { Suspense, lazy } from "react";
import Navbar from './components/Navbar';
import logo_app from './assets/images/logoApp.png';
import { useWeather } from './components/ProviderWeather.jsx';
import ProviderWeather from './components/ProviderWeather.jsx';
import WeatherMap from './components/WeatherMap.jsx';
import Geocode from './components/Geocode.jsx';
import WeatherForecast from './components/WeatherForecast.JSX';
import AirPollution from './components/AirPollution.jsx';
import CardCarousel from './components/CardCarousel.jsx';

// Lazy load the components
const WeatherDisplay = lazy(() => import('./components/WeatherDisplay'));
const SearchBox = lazy(() => import('./components/SearchBox.jsx'));
const Footer = lazy(() => import('./components/Footer'));
const ContactUs = lazy(() => import('./components/ContactUs.jsx'));

function App() {
  // useEffect(() => {
  //   document.body.style.backgroundColor = 'linear-gradient(0deg, rgba(111, 198, 153, 1) 0%, rgba(67, 157, 235, 1) 73%, rgba(71, 115, 224, 1) 100%)!important '; // Replace with your color
  //   return () => {
  //     document.body.style.backgroundColor = ''; // Reset on unmount if needed
  //   };
  // }, []);

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
        <Suspense fallback={<div>Loading Search Box...</div>}>
          <SearchBox catchValue={catchValue} content={content} onChange={handleChange} />
        </Suspense>
      )}
      <Suspense fallback={<div>Loading Weather Display...</div>}>
        <WeatherDisplay dataWeather={result} />
      </Suspense>
      <Suspense>
       
      </Suspense>
  
                   <div
             className="flex flex-col md:flex-row md:ps-24 md:gap-14  items-center p-5">

               <Geocode/>
              {/* <WeatherWidget/> */}
               <AirPollution  />
                
              {/* <CardCarousel cards={dataArray} /> */}
          </div>    
      <Suspense fallback={<div>Loading Contact Us...</div>}>
        <ContactUs />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
