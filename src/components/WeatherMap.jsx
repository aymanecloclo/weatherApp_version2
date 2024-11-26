import React, { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const WeatherMap = ({ city }) => {
    const mapRef = useRef(null);
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = '7ab4338a56030b82d25ba8a78b578696'; // Remplacez par votre clé API
    const mapInstanceRef = useRef(null); // Utilisation d'une ref pour la carte

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
                const data = await response.json();
                setWeatherData(data);

                if (data.coord) {
                    const { lat, lon } = data.coord;

                    // Vérifier si une carte existe déjà
                    if (!mapInstanceRef.current) {
                        // Initialiser la carte
                        const map = L.map(mapRef.current).setView([lat, lon], 10);

                        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                            maxZoom: 19,
                        }).addTo(map);

                        // Ajouter un marqueur
                        const marker = L.marker([lat, lon]).addTo(map);

                        // Popup avec les infos météo
                        marker.bindPopup(`
                            <strong>${city}</strong><br>
                            Température: ${data.main.temp} °C<br>
                            Météo: ${data.weather[0].description}
                        `).openPopup();

                        // Conserver l'instance de la carte dans la ref
                        mapInstanceRef.current = map;
                    } else {
                        // Mettre à jour la vue de la carte existante
                        mapInstanceRef.current.setView([lat, lon], 10);
                        // Vous pouvez également ajouter une logique pour déplacer le marqueur ici si nécessaire
                    }
                }
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        fetchWeatherData();

        // Nettoyage lorsque le composant est démonté ou que la ville change
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove(); // Supprimer la carte existante
                mapInstanceRef.current = null; // Réinitialiser la ref
            }
        };
    }, [city]); // Réexécute uniquement si la ville change

    return (
        <div className="mt-5 lg:mt-0 transition-transform duration-300 transform hover:scale-105 w-full md:mx-auto bg-white shadow-2xl rounded-3xl p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Carte radar pour {city}</h2>
            <div ref={mapRef} className="h-80 rounded-lg overflow-hidden mb-4">
                {/* La carte sera rendue ici */}
            </div>
            {weatherData && (
                <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-700">Détails Météo :</h3>
                    <p className="text-lg text-gray-600">
                        Température : <span className="font-bold">{weatherData.main.temp} °C</span>
                    </p>
                    <p className="text-lg text-gray-600">
                        Temps : <span className="font-bold">{weatherData.weather[0].description}</span>
                    </p>
                </div>
            )}
        </div>
    );
};

export default WeatherMap;
