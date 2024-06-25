/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Sidebar } from '../components/sidebar/Sidebar';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GpsIcon from '../assets/icons/gps.svg';
import LocationIcon from '../assets/icons/location.svg';
import { CurrentWeatherContext } from '../context/CurrentWeatherContext';

const mockWeatherData = {
  base: 'stations',
  clouds: {
    all: 0,
  },
  cod: 200,
  coord: {
    lat: 40.71,
    lon: -74.01,
  },
  dt: 1605280364,
  id: 5128581,
  main: {
    feels_like: 293.65,
    grnd_level: 1013,
    humidity: 81,
    pressure: 1013,
    sea_level: 1013,
    temp: 23,
    temp_max: 294.15,
    temp_min: 292.04,
  },
  name: 'Ciudad de Prueba',
  sys: {
    country: 'US',
    id: 4610,
    sunrise: 1605263324,
    sunset: 1605300274,
    type: 1,
  },
  timezone: -18000,
  visibility: 10000,
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    },
  ],
  wind: {
    deg: 270,
    gust: 8.7,
    speed: 5.1,
  },
};

const mockContextValue = {
  weatherData: mockWeatherData,
  city: 'Ciudad de Prueba',
  setCity: jest.fn(),
  cityLocal: '',
  setCityLocal: jest.fn(),
  setLonLatValue: jest.fn(),
  lonLatValue: {
    lat: 40.71,
    lon: -74.01,
    stateCountry: 'Estado/País de Prueba',
    name: 'Ciudad de Prueba',
  },
};

describe('test for component sidebar', () => {
  it('render component', () => {
    render(<Sidebar isFahrenheit={false} />);
  });

  it('render sidebar with stateInput true', () => {
    render(<Sidebar isFahrenheit={true} />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    const gpsIcon = screen.getByAltText('Icon GPS');
    expect(gpsIcon).toHaveAttribute('src', GpsIcon);
    const locationIcon = screen.getByAltText('Location Icon');
    expect(locationIcon).toHaveAttribute('src', LocationIcon);
    expect(
      screen.getByText((content) => content.startsWith('Today')),
    ).toBeInTheDocument();
    expect(screen.getByText('•')).toBeInTheDocument();
  });

  it('test button input', () => {
    render(<Sidebar isFahrenheit={true} />);
    const button = screen.getByRole('textbox');
    fireEvent.click(button);
    expect(screen.getByText('Search')).toBeInTheDocument();
  });

  it('test render weatherdata with celsius', async () => {
    render(
      <CurrentWeatherContext.Provider value={mockContextValue}>
        <Sidebar isFahrenheit={true} />
      </CurrentWeatherContext.Provider>,
    );
    expect(screen.getByTestId('temperature')).toHaveTextContent('23ºC');
    expect(screen.getByText('Clear')).toBeInTheDocument();
  });
  it('test render weatherdata with Fahrenheit', async () => {
    render(
      <CurrentWeatherContext.Provider value={mockContextValue}>
        <Sidebar isFahrenheit={false} />
      </CurrentWeatherContext.Provider>,
    );
    expect(screen.getByTestId('temperature')).toHaveTextContent('73ºF');
  });

});
