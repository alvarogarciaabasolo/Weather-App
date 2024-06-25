import { useState, useEffect, useContext } from 'react';
import { CurrentWeatherContext } from '../context/CurrentWeatherContext';
import { useGeolocation } from '../lib/useGeolocation';
import {
  CoorsProps,
  CoordsBooleanContext,
} from '../context/CoordsBooleanContext';

interface WeatherFiveDay {
  city: {
    id: number;
  };
  list: {
    clouds: {
      all: number;
    };
    dt: number;
    dt_txt: string;
    main: {
      feels_like: number;
      grnd_level: number;
      humidity: number;
      pressure: number;
      sea_level: number;
      temp: number;
      temp_kf: number;
      temp_max: number;
      temp_min: number;
    };
    pop: number;
    rain?: {
      '3h': number;
    };
    sys: {
      pod: string;
    };
    visibility: number;
    weather: Array<{
      description: string;
      icon: string;
      id: number;
      main: string;
    }>;
    wind: {
      deg: number;
      gust: number;
      speed: number;
    };
  }[];
  cityLocal: string;
}
interface WeatherFiveDayResponse {
  weatherFiveData: WeatherFiveDay | null;
  loadingFive: boolean;
}

export const useFiveDayWeather = (): WeatherFiveDayResponse => {
  const [weatherFiveData, setWeatherFiveData] = useState<WeatherFiveDay | null>(
    null,
  );
  const [loadingFive, setLoadingFive] = useState<boolean>(false);
  const { lonLatValue = null } = useContext(CurrentWeatherContext) || {};
  const { coords } = useGeolocation();
  const { isCoords = null } =
    useContext<CoorsProps | null>(CoordsBooleanContext) || {};

  useEffect(() => {
    const fetchFiveDay = async () => {
      try {
        setLoadingFive(true);
        const latitude = isCoords ? coords?.Latitude : lonLatValue?.lat;
        const longitude = isCoords ? coords?.Longitude : lonLatValue?.lon;
        const url =
          latitude && longitude
            ? `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=840fdbbddab09b30463280b8c2a850ed&lang=es&units=metric`
            : `https://api.openweathermap.org/data/2.5/forecast?q=${'Madrid'}&appid=840fdbbddab09b30463280b8c2a850ed&lang=es&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        setWeatherFiveData(data);
        setLoadingFive(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchFiveDay();
  }, [coords, isCoords, lonLatValue]);

  return { weatherFiveData, loadingFive };
};
