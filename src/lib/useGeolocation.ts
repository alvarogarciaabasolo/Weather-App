import { useEffect, useState, useContext} from 'react';
import {CoorsProps, CoordsBooleanContext} from '../context/CoordsBooleanContext'

export interface GeolocationProps {
  Latitude: number;
  Longitude: number;
}
interface UseGeolocationProps {
  coords: GeolocationProps | undefined;
}
export const useGeolocation = (): UseGeolocationProps => {
  const [coords, setCoords] = useState<GeolocationProps>();
  const { isCoords= null } = useContext<CoorsProps |null >(CoordsBooleanContext) || {};

  useEffect(() => {
    if(!isCoords) return;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const Latitude = position.coords.latitude;
          const Longitude = position.coords.longitude;
          setCoords({ Latitude, Longitude });
        },
        (error) => console.error('Error obtaining location: ', error),
      );
    }
  }, [isCoords]);

  return { coords };
};
