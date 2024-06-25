import {
  ContentSection,
  ChangeTemperature,
  Celsius,
  Fahrenheit,
  CelsiusText,
  FahrenheitText,
  Footer,
  UsernameFooter,
} from '../../styles/CotentBodyCss';
import { ContentBodyWeatherToday } from './ContentBodyWeatherToday';
import { ContentBodyWeatherWeek } from './ContentBodyWeatherWeek';

interface ContentBodyProps {
  setFahrenheit: (value: boolean) => void;
  isFahrenheit: boolean;
}

export const ContentBody = ({
  setFahrenheit,
  isFahrenheit,
}: ContentBodyProps) => {
  // Toggle temperature unit between Fahrenheit and Celsius.
  const handleFahrenheit = () => {
    setFahrenheit(false);
  };
  const handleFaCelsius = () => {
    setFahrenheit(true);
  };

  return (
    <ContentSection>
      <ChangeTemperature>
        <Celsius onClick={handleFaCelsius}>
          <CelsiusText >ºC</CelsiusText>
        </Celsius>
        <Fahrenheit onClick={handleFahrenheit}>
          <FahrenheitText>ºF</FahrenheitText>
        </Fahrenheit>
      </ChangeTemperature>
      <ContentBodyWeatherWeek isFahrenheit={isFahrenheit} />
      <ContentBodyWeatherToday />
      <Footer>
        created by <UsernameFooter>Alvaro Garcia</UsernameFooter> -
        devChallenges.io
      </Footer>
    </ContentSection>
  );
};
