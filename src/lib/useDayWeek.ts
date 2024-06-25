import { useDateUtilFiveDay } from '../lib/useDateUtilFiveDay';
import { formatDate } from './formatDate';

export const useDayWeek = () => {
  const { datesFilterMin, datesFilterMax, loadingFive } = useDateUtilFiveDay();

  const dayOfWeek = (number: number) => {
    return formatDate(datesFilterMax?.[number]?.dt_txt || '');
  };

  const iconImg = (number: number) => {
    return datesFilterMax?.[number].weather.map((weathe) => weathe.icon);
  };

  const temperatureCelsiusMax = (number: number): number => {
    return datesFilterMax
      ? Math.round(datesFilterMax?.[number].main.temp_max)
      : 0;
  };

  const temperatureCelsiusMin = (number: number): number => {
    return datesFilterMin
      ? Math.round(datesFilterMin?.[number].main.temp_min)
      : 0;
  };

  const temperatureFahrenheitMaxMin = (temperature: number): number => {
    return Math.round((temperature * 9) / 5 + 32);
  };

  const formatMaxTemperature = (
    number: number,
    isFahrenheit: boolean,
  ): string => {
    return isFahrenheit
      ? temperatureCelsiusMax(number) + 'ºC'
      : temperatureFahrenheitMaxMin(temperatureCelsiusMax(number)) + 'ºF';
  };

  const formatMinTemperature = (
    number: number,
    isFahrenheit: boolean,
  ): string => {
    return isFahrenheit
      ? temperatureCelsiusMin(number) + 'ºC'
      : temperatureFahrenheitMaxMin(temperatureCelsiusMin(number)) + 'ºF';
  };

  return {
    dayOfWeek,
    formatMaxTemperature,
    formatMinTemperature,
    iconImg,
    loadingFive,
  };
};
