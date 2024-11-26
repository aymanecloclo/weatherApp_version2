import React from 'react';
import PropTypes from 'prop-types';
import bgWeather from "../assets/images/bg-weatherDisplay.jpg";
import { CiLocationOn } from "react-icons/ci";
import speedIcon from '../assets/images/speed_wind.png';
import CardCarousel from './CardCarousel';
// Import des icônes
import pressureIcon from '../assets/images/pressure.png';
import humidity from '../assets/images/humidity.png';
import visibilityIcon from '../assets/images/visibility.png';
import windIcon from '../assets/images/speed_wind.png';
import pressureMer from '../assets/images/niveau-de-la-mer.png';
import nuages from '../assets/images/nuages.png';
import max_temp from '../assets/images/max_temp.png';
import min_temp from '../assets/images/min_temp.png';
import sunny from '../assets/images/sunny.jpg';
import cold from '../assets/images/cold.jpg';
import littleSunny from '../assets/images/littleSunny.jpg';
import sunrise from '../assets/images/sunrise.png';
import sunset from '../assets/images/sunset.png';
import AirPollution from './AirPollution.jsx';
import Geocode from './Geocode.jsx';
import WeatherWidget from './WeatherWidget.jsx';
import WeatherMap from './WeatherMap.jsx';
import SunShow from './SunShow.jsx';
import ConnectivityStatus from '../components/ConnectivityStatus.jsx'
const WeatherDisplay = ({ dataWeather }) => {
  if (!dataWeather) return <ConnectivityStatus />;

  const options = { month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
  const currentDate = new Date();3
  const formattedDate = currentDate.toLocaleString('en-US', options).replace(',', '');

  const { name, sys, main, wind, visibility, weather, clouds } = dataWeather;
  console.log(name)
 // Convertir les timestamps de lever et coucher de soleil en objets Date
  const sunriseDate = new Date(sys.sunrise * 1000); // Multiplier par 1000 pour convertir en millisecondes
  const sunsetDate = new Date(sys.sunset * 1000);

const formattedSunrise = sunriseDate.toLocaleTimeString('fr-FR', { timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
const formattedSunset = sunsetDate.toLocaleTimeString('fr-FR', { timeZone: 'Africa/Casablanca', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

  const dataArray = [
    {
      title: 'Pression Atmosphérique',
      value: main?.pressure,
      unit: 'hPa',
      icon: pressureIcon, // Icône pour la pression
    },
    {
      title: 'Pression Niveau de la Mer',
      value: main?.sea_level || 'N/A', // Affiche N/A si la donnée est absente
      unit: 'hPa',
      icon: pressureMer,
    },
    {
      title: 'Humidité',
      value: main?.humidity,
      unit: '%',
      icon: humidity, // Icône pour l'humidité
    },
    {
      title: 'Vitesse du vent',
      value: (wind?.speed * 3.6).toFixed(1), // Conversion en km/h
      unit: 'km/h',
      icon: windIcon, // Icône pour la vitesse du vent
    },
    {
      title: 'Visibilité',
      value: visibility || 'N/A', // Valeur de la visibilité en mètres
      unit: 'm',
      icon: visibilityIcon, // Icône pour la visibilité
    },
    {
      title: 'Niveau de nuages',
      value: clouds?.all || 0, // Niveau de nuages en pourcentage
      unit: '%',
      icon: nuages, // Tu peux ajouter une icône ici si tu veux
    },
    {
      title: 'Température Min',
      value: Number(main?.temp_min),
      unit: '°C',
      icon: min_temp , // Icône pour la température minimale si nécessaire
    },
    {
      title: 'Température Max',
      value: main?.temp_max,
      unit: '°C',
      icon: max_temp, // Icône pour la température maximale si nécessaire
    },
  ];
  let feelslike=Math.floor(Number(main?.feels_like));
  
 

  return (
    <div
      className="flex pt-24 text-slate-50/85 font-extrabold px-0"
      id="weatherBox  mx-0 relative"
      // style={styleComponent}
    >
      {/* Overlay for contrast */}
      <div id='home' className="bg-black/5 absolute top-0 left-0 w-full h-48"></div>

      <div className="z-20 w-full md:flex md:justify-center flex-col  m-0 p-0 ">
        <div className="flex sm:flex-row xs:flex-col my-2">
          {/* City Name and Country */}
          <h3 className='flex items-center gap-0.5 xs:px-2 px-10 text-2xl'>
            <CiLocationOn size={20} /> {name}, <span>{sys?.country}</span>
          </h3>
          {/* Date */}
          <p className="date font-medium pe-10 sm:text-2xl text-nowrap text-lg xs:px-5 ">{formattedDate}</p>
        </div>
         {/* current weather */}
        <div className="flex-col lg:flex lg:flex-row  lg:px-8  mt-5">
          <div className="flex flex-col md:items-center">
             <div className=" flex gap-10   bg-gradient-to-br from-cyan-400/75 via-sky-500   h-[165px] mx-2 py-5 rounded-lg md:w-[600px] -shadow-xl xs:flex transition-transform duration-300 transform hover:scale-105 ">
            
            <div className="flex-col ">
            <h6 className='text-md ps-5 '>Current weather</h6>
            <div className="flex items-center">
              <img
                src={`https://openweathermap.org/img/wn/${weather[0]?.icon}@2x.png`}
                alt="Weather Icon"
                className=" object-cover"
              />
              <h1 className="text-6xl xxs:text-4xl font-extralight relative  text-white ">
                {`${Math.floor(Number(main?.feels_like))}`}
                <span className="absolute -top-2 text-2xl font-medium">°C</span>
              </h1>
              </div>
            </div>

            <div className="flex flex-col xs:items-center gap-2 text-4xl text-white font-semibold ">
              <span className="capitalize text-xl    ">{weather[0]?.description}</span>
              <span className="text-sm md:text-xl">{`Feels like: ${main?.feels_like}°C`}</span>
              <div className="flex text-sm flex-wrap gap-2 md:text-xl">
                <span>{`Max: ${main?.temp_max}°C`}</span>
                <span>{`Min: ${main?.temp_min}°C`}</span>
              </div>
            </div>
          </div>
               {/* <div className=" ps-10 lg:flex  flex-col flex items-center p-5  lg:flex-row gap-10 lg:gap-24 md:h-1/2">

             <SunShow image={sunrise} time='5h'/>
              <SunShow image={sunset} time='5h'/>
           </div>   */}
          </div>
           <div className="w-full flex items-center md:pt-0  p-5">

           <WeatherMap city={name}  />
           </div>
      
        
        </div>
       
        <CardCarousel cards={dataArray}/> 
   
      </div>
    </div>
  );
};

WeatherDisplay.propTypes = {
  dataWeather: PropTypes.object,
};

export default WeatherDisplay;