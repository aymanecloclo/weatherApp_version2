import React, { useState, useEffect } from 'react';
import Search from './Search';
import CloseBtn from './CloseBtn';
import { CiLocationOn } from "react-icons/ci";
import { useWeather } from './ProviderWeather';
import useDebounce from './debounce.JSX';
const SearchBox = () => {
  const [city, setCity] = useState('');
  const [filteredCities, setFilteredCities] = useState([]);
  const REACT_APP_API_KEY = '7ab4338a56030b82d25ba8a78b578696';
  const { handleChange, catchValue, content } = useWeather();

  const debouncedCity = useDebounce(city, 500); // Délais de 500ms

  const fetchCities = async (inputValue) => {
    if (inputValue.length > 0) { 
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/find?q=${inputValue}&type=like&sort=population&cnt=10&appid=${REACT_APP_API_KEY}`
        );
        const data = await response.json();
        console.log("Data fetched:", data);

        const citiesWithDetails = data.list.map(cityObj => ({
          name: cityObj.name,
          country: cityObj.sys.country,
        })); 

        setFilteredCities(citiesWithDetails);
      } catch (error) {
        console.error('Erreur lors de la récupération des villes:', error);
      }
    } else {
      setFilteredCities([]);
    }
  };

  useEffect(() => {
    fetchCities(debouncedCity);
  }, [debouncedCity]); // Appeler seulement sur la valeur debounce

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  return (
    <div className='flex justify-center'>
      <div className="fixed w-full lg:w-9/12 lg:top-[5%] bg-white min-screen flex flex-col rounded-lg h-screen lg:max-h-[80%] border shadow-md z-50">
        <CloseBtn onChange={handleChange} />
        <h3 className='mt-12 mb-2 ms-5 font-medium lg:text-sm'>Rechercher votre prévision météo</h3>
        <Search handleInputChange={handleInputChange} city={city} />

        <ul className='flex flex-col mt-5'>
          <li className='bg-sky-400 py-2 text-slate-50 ps-2'>EMPLACEMENTS</li>
          {filteredCities.length > 0 ? (
            filteredCities.map((cityDetails, index) => (
              <li key={index} onClick={(e) => catchValue(e)} className='py-2 w-11/12 border-b-2 cursor-pointer text-sm px-2 flex gap-1 items-center'>
                <CiLocationOn />
                {`${cityDetails.name}, ${cityDetails.country}`}
              </li>
            ))
          ) : (
            <li className='py-2 w-11/12 border-b-2 text-sm px-3'>Aucune ville trouvée</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;