import { ContentBodyWeatherWeek } from '../components/contentBody/ContentBodyWeatherWeek';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../lib/useDayWeek', () => ({
  useDayWeek: jest.fn(),
}));

describe('ContentBodyWeatherWeek con loadingFive en true', () => {
  beforeEach(() => {
    require('../lib/useDayWeek').useDayWeek.mockImplementation(() => ({
      loadingFive: true,
    }));
  });
  it('render component', () => {
    render(<ContentBodyWeatherWeek isFahrenheit={false} />);
  });

  it('render text of components', () => {
    render(<ContentBodyWeatherWeek isFahrenheit={false} />);

    const loadingElements = screen.getAllByText('Loading...');
    loadingElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  });
});

describe('ContentBodyWeatherWeek con loadingFive en false', () => {
  beforeEach(() => {
    require('../lib/useDayWeek').useDayWeek.mockImplementation(() => ({
      dayOfWeek: jest.fn().mockReturnValue('Sun'),
      iconImg: jest.fn().mockReturnValue('icon.svg'),
      formatMaxTemperature: jest.fn().mockReturnValue('20 ºC'),
      formatMinTemperature: jest.fn().mockReturnValue('10 ºC'),
      loadingFive: false,
    }));
  });

  it('render with loading five false', () => {
    render(<ContentBodyWeatherWeek isFahrenheit={false} />);

    expect(screen.getByText('Tomorrow')).toBeInTheDocument();

    screen
      .getAllByText('10 ºC')
      .forEach((element) => expect(element).toBeInTheDocument());

    screen
      .getAllByText('20 ºC')
      .forEach((element) => expect(element).toBeInTheDocument());
  });

  it('render with loading five false image', () => {
    render(<ContentBodyWeatherWeek isFahrenheit={false} />);

    screen
      .getAllByRole('img')
      .forEach((element) => expect(element).toBeInTheDocument());
  });
});
