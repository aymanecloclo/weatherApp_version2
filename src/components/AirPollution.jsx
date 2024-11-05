// src/AirPollution.js

import React, { useEffect, useState } from 'react';

const AirPollution = () => {
    const lat = 34.020882; // Latitude for Rabat
    const lon = -6.841650;
    const [pollutionData, setPollutionData] = useState(null);
    const apiKey = '7ab4338a56030b82d25ba8a78b578696'; // Replace with your OpenWeatherMap API key

    useEffect(() => {
        const fetchAirPollutionData = async () => {
            try {
                const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${apiKey}`);
                const data = await response.json();
                setPollutionData(data);
            } catch (error) {
                console.error('Error fetching air pollution data:', error);
            }
        };

        fetchAirPollutionData();
    }, [lat, lon, apiKey]);

    return (
        <div className="max-w-md mx-auto p-5 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Air Pollution Data</h2>
            {pollutionData ? (
                <div>
                    <h3 className="text-xl mb-2">AQI (Air Quality Index): 
                      <span className={`ml-2 font-semibold ${pollutionData.list[0].main.aqi === 1 ? 'text-green-500' : pollutionData.list[0].main.aqi === 2 ? 'text-yellow-500' : pollutionData.list[0].main.aqi === 3 ? 'text-orange-500' : pollutionData.list[0].main.aqi === 4 ? 'text-red-500' : 'text-purple-500'}`}>
                        {pollutionData.list[0].main.aqi}
                      </span>
                    </h3>
                    <h4 className="text-lg font-semibold mb-2">Pollutants:</h4>
                    <ul className="list-disc pl-5">
                        <li>CO: {pollutionData.list[0].components.co} µg/m³</li>
                        <li>NO: {pollutionData.list[0].components.no} µg/m³</li>
                        <li>NO₂: {pollutionData.list[0].components.no2} µg/m³</li>
                        <li>O₃: {pollutionData.list[0].components.o3} µg/m³</li>
                        <li>SO₂: {pollutionData.list[0].components.so2} µg/m³</li>
                        <li>PM₂.₅: {pollutionData.list[0].components.pm2_5} µg/m³</li>
                        <li>PM₁₀: {pollutionData.list[0].components.pm10} µg/m³</li>
                        <li>NH₃: {pollutionData.list[0].components.nh3} µg/m³</li>
                    </ul>
                </div>
            ) : (
                <p className="text-gray-600">Loading air pollution data...</p>
            )}
        </div>
    );
};

export default AirPollution;
