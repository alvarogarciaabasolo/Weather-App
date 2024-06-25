import {
  WeatherToday,
  TextWeatherToday,
  WindStatus,
  Humidity,
  Visibility,
  AirPressure,
  WindHumidity,
  VisibilityAirPressure,
  ContentTextWeatherToday,
  HightlightsText,
  WindStatusValue,
  WindStatusValueSpan,
  WindStatusWsw,
  WindImg,
  WindWswText,
  HumidityValue,
  HumidityValuetext,
  VisibilityValue,
  HumidityPercentageValue,
  HumidityRectangule,
  HumidityPercentage,
  HumidityRectanguleYellow,
  HumidityPercentageValueText,
  HumidityPercentageDiv,
  HumidityRectanguleDiv,
  AirPressureValue,
  VisibilityValueText,
  AirPressureValueTex,
} from '../../styles/ContentBodyweatherTodayCss';
import NavigationIcon from '../../assets/icons/navigation.svg';
import { useDateUtilCurrentDay } from '../../lib/useDateUtilCurrentDay';

export const ContentBodyWeatherToday = () => {
  // Extract environment data from custom hooks.
  const { windStatus, humidity, visibility, airPressure, windDeg } =
    useDateUtilCurrentDay();

  return (
    <WeatherToday>
      <ContentTextWeatherToday>
        <TextWeatherToday>Today’s Hightlights</TextWeatherToday>
      </ContentTextWeatherToday>
      <WindHumidity>
        <WindStatus>
          <HightlightsText>Wind status</HightlightsText>
          <WindStatusValue>
            {windStatus} <WindStatusValueSpan>mph</WindStatusValueSpan>
          </WindStatusValue>
          <WindStatusWsw>
            <WindImg $winddeg={windDeg}>
              <img src={NavigationIcon} alt="Navigation Icon" />
            </WindImg>
            <WindWswText>WSW</WindWswText>
          </WindStatusWsw>
        </WindStatus>
        <Humidity>
          <HightlightsText>Humidity</HightlightsText>
          <HumidityValue>
            {humidity}
            <HumidityValuetext>%</HumidityValuetext>
          </HumidityValue>
          <HumidityPercentageValue>
            <HumidityPercentageValueText>0</HumidityPercentageValueText>
            <HumidityPercentageValueText>50</HumidityPercentageValueText>
            <HumidityPercentageValueText>100</HumidityPercentageValueText>
          </HumidityPercentageValue>
          <HumidityRectanguleDiv>
            <HumidityRectangule>
              <HumidityRectanguleYellow $humidity={humidity} />
            </HumidityRectangule>
          </HumidityRectanguleDiv>
          <HumidityPercentageDiv>
            <HumidityPercentage>%</HumidityPercentage>
          </HumidityPercentageDiv>
        </Humidity>
      </WindHumidity>
      <VisibilityAirPressure>
        <Visibility>
          <HightlightsText>Visibility</HightlightsText>
          <VisibilityValue>
            {visibility}
            <VisibilityValueText>miles</VisibilityValueText>
          </VisibilityValue>
        </Visibility>
        <AirPressure>
          <HightlightsText>Air Pressure</HightlightsText>
          <AirPressureValue>
            {airPressure}
            <AirPressureValueTex>mb</AirPressureValueTex>
          </AirPressureValue>
        </AirPressure>
      </VisibilityAirPressure>
    </WeatherToday>
  );
};
