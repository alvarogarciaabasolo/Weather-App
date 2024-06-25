import { useContext } from 'react';
import {CurrentWeatherContext} from '../context/CurrentWeatherContext'
import { UseCurrentWeatherData } from '../services/useCurrentWeather';

export const useDateUtilCurrentDay = () => {
  
  const {weatherData}= useContext< UseCurrentWeatherData | null>(CurrentWeatherContext) || {}

  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const currentDate = new Date();
  const monthNumber = currentDate.getMonth();
  const dayName = daysOfWeek[currentDate.getDay()];
  const dayNameSort = dayName.slice(0, 3);
  const dayDate = currentDate.getDate();
  const monthDate = month[monthNumber].slice(0, 3);
  const temperature = weatherData ? Math.round(weatherData?.main.temp) : 0;
  const temperatureFahrenheit =Math.round((temperature * 9) / 5 + 32);

  const windStatus = Math.round(weatherData?.wind.speed || 0);
  const windDeg = weatherData?.wind.deg || 0
  const humidity = weatherData ? weatherData?.main.humidity : 0;
  const visibility = weatherData
    ? parseFloat((weatherData?.visibility / 1609.34).toFixed(1))
    : 0;
  const airPressure = weatherData?.main.pressure;

  return {
    dayDate,
    monthDate,
    temperature,
    dayNameSort,
    windStatus,
    humidity,
    visibility,
    airPressure,
    temperatureFahrenheit,
    windDeg,
  };
};
