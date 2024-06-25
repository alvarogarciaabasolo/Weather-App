import { useFiveDayWeather } from '../services/useFiveDayWeather';

export const useDateUtilFiveDay = () => {
  const { weatherFiveData, loadingFive } = useFiveDayWeather();

  const datesFilterMin = weatherFiveData?.list.filter((a) =>
    a.dt_txt.endsWith('06:00:00'),
  );
  const datesFilterMax = weatherFiveData?.list.filter((a) =>
    a.dt_txt.endsWith('15:00:00'),
  );

  return { datesFilterMin, datesFilterMax, loadingFive };
};
