import React from 'react';
import { useWeather } from './ProviderWeather';

const SunShow = ({ title , image }) => {
  const { result } = useWeather() || {};

  // Vérification de la validité de `result` et de ses propriétés
  if (!result || !result.sys) {
    return (
      <div className="text-center text-white font-mono">
        <p>Données météo indisponibles</p>
      </div>
    );
  }

  // Configuration pour le formatage de la date/heure
  const sunriseDate = new Date(result.sys.sunrise * 1000); // Multiplier par 1000 pour convertir en millisecondes
  const sunsetDate = new Date(result.sys.sunset * 1000);

  // Formatage des heures de lever et de coucher de soleil
  const formattedSunrise = sunriseDate.toLocaleTimeString('fr-FR', {
    timeZone: 'Africa/Casablanca',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  const formattedSunset = sunsetDate.toLocaleTimeString('fr-FR', {
    timeZone: 'Africa/Casablanca',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });

  return (
    <div
      className="duration-300 font-mono text-white group cursor-pointer relative overflow-hidden bg-gradient-to-r from-cyan-400/75 to-blue-400 w-28 h-48 rounded-3xl p-4 hover:w-48 hover:bg-sky-400/95"
    >
      <h3 className="text-xl text-center">{title}</h3>
      <div className="gap-4 relative">
        <img src={image} className="w-20 h-20 block mx-auto" alt={title} />
      </div>
      <div className="absolute duration-300 -left-32 mt-2 group-hover:left-10 flex items-center py-5">
        <p className="md:text-xl text-md flex justify-center">
          {title === 'Sunset' ? formattedSunset : formattedSunrise}
        </p>
      </div>
    </div>
  );
};

export default SunShow;
