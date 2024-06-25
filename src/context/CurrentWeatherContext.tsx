import { createContext } from 'react';
import {
  useCurrentWeather,
  UseCurrentWeatherData,
} from '../services/useCurrentWeather';

export const CurrentWeatherContext =
  createContext<UseCurrentWeatherData | null>(null);

export const CurrentWeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    weatherData,
    city,
    setCity,
    cityLocal,
    setCityLocal,
    setLonLatValue,
    lonLatValue,
  } = useCurrentWeather();

  return (
    <CurrentWeatherContext.Provider
      value={{
        weatherData,
        city,
        setCity,
        cityLocal,
        setCityLocal,
        setLonLatValue,
        lonLatValue,
      }}
    >
      {children}
    </CurrentWeatherContext.Provider>
  );
};
