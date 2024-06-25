import { useDayWeek } from '../../lib/useDayWeek';
import {
  WeatherWeek,
  DayWeek,
  DayOfWeek,
  DayWeekImg,
  DayWeekTempMaxMin,
  Max,
  Min,
  Loading,
  LoadingText,
} from '../../styles/ContentBodyWeatherWeekCss';

export const ContentBodyWeatherWeek = ({
  isFahrenheit,
}: {
  isFahrenheit: boolean;
}) => {
  // Extract weather data from custom hooks.
  const {
    dayOfWeek,
    iconImg,
    formatMaxTemperature,
    formatMinTemperature,
    loadingFive,
  } = useDayWeek();

  const days = [0, 1, 2, 3, 4];

  return (
    <WeatherWeek>
      {days.map((day) => (
        <DayWeek key={day}>
          {!loadingFive ? (
            <>
              {day === 0 ? (
                <DayOfWeek>Tomorrow</DayOfWeek>
              ) : (
                <DayOfWeek>{dayOfWeek(day)}</DayOfWeek>
              )}
              <DayWeekImg
                src={
                  iconImg(day)
                    ? `https://openweathermap.org/img/wn/${iconImg(day)}@2x.png`
                    : ''
                }
                alt="Weather Icon"
              />
              <DayWeekTempMaxMin>
                <Max>{formatMaxTemperature(day, isFahrenheit)}</Max>
                <Min>{formatMinTemperature(day, isFahrenheit)}</Min>
              </DayWeekTempMaxMin>
            </>
          ) : (
            <Loading>
              <LoadingText>Loading...</LoadingText>
            </Loading>
          )}
        </DayWeek>
      ))}
    </WeatherWeek>
  );
};
