import { ContentBodyWeatherToday } from '../components/contentBody/ContentBodyWeatherToday';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationIcon from '../assets/icons/navigation.svg';

jest.mock('../lib/useDateUtilCurrentDay.ts', () => ({
  useDateUtilCurrentDay: () => ({
    windStatus: 23,
    humidity: 87,
    visibility: 10,
    airPressure: 30,
  }),
}));

describe('test for the ContentBodyWeatherToday component', () => {
  it('render component', () => {
    render(<ContentBodyWeatherToday />);
  });

  it('render text of components', () => {
    render(<ContentBodyWeatherToday />);
    expect(screen.getByText('Today’s Hightlights')).toBeInTheDocument();
    expect(screen.getByText('Wind status')).toBeInTheDocument();
    expect(screen.getByText('Air Pressure')).toBeInTheDocument();
    expect(screen.getByText('Humidity')).toBeInTheDocument();
  });

  it('renders dates of useDateUtilCurrentDay', () => {
    render(<ContentBodyWeatherToday />);
    expect(screen.getByText(23)).toBeInTheDocument();
    expect(screen.getByText(87)).toBeInTheDocument();
    expect(screen.getByText(10)).toBeInTheDocument();
    expect(screen.getByText(30)).toBeInTheDocument();
  });

  it('renders an image with the correct src and alt text', () => {
    render(<ContentBodyWeatherToday />);
    expect(screen.getByRole('img')).toHaveAttribute('src', NavigationIcon);
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Navigation Icon');
  });
});
