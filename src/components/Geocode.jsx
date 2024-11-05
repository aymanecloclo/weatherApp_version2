// src/Geocode.js

import React, { useState } from 'react';

const Geocode = () => {
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [locationData, setLocationData] = useState(null);
    const [error, setError] = useState('');
    const apiKey = '7ab4338a56030b82d25ba8a78b578696'; // Replace with your OpenWeatherMap API key

    const fetchGeocodeData = async () => {
        if (!city || !country) {
            setError('Please enter a city and country.');
            return;
        }

        setError('');
        try {
            const response = await fetch(
                `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`
            );
            const data = await response.json();

            if (data.length > 0) {
                setLocationData(data[0]);
            } else {
                setError('Location not found.');
                setLocationData(null);
            }
        } catch (error) {
            console.error('Error fetching geocode data:', error);
            setError('Failed to fetch data. Please try again later.');
        }
    };

    return (
        <div className="max-w-md mx-auto p-5 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Geocode Lookup</h2>
            <input
                type="text"
                placeholder="City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
                type="text"
                placeholder="State (optional)"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mb-2 p-2 border border-gray-300 rounded w-full"
            />
            <button
                onClick={fetchGeocodeData}
                className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
                Get Coordinates
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {locationData && (
                <div className="mt-4">
                    <h3 className="text-xl">Location Details:</h3>
                    <p>Latitude: {locationData.lat}</p>
                    <p>Longitude: {locationData.lon}</p>
                    <p>Country: {locationData.country}</p>
                    <p>State: {locationData.state || 'N/A'}</p>
                </div>
            )}
        </div>
    );
};

export default Geocode;
