import { useContext, useEffect, useState } from 'react';
import { CurrentWeatherContext } from '../context/CurrentWeatherContext';

export interface City {
  name: string;
  lat: number;
  lon: number;
  country?: string;
  state: string;
}

export const useListCity = () => {
  const [listCity, setListCity] = useState<City[]>();

  const { cityLocal } = useContext(CurrentWeatherContext) ?? {};

  useEffect(() => {
    const fetchListCity = async () => {
      try {
        if (!cityLocal) return;
        const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityLocal}&limit=5&appid=840fdbbddab09b30463280b8c2a850ed`;
        const response = await fetch(url);
        const data = await response.json();
        setListCity(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchListCity();
  }, [cityLocal]);

  return { listCity };
};
