import { ContentBody } from '../components/contentBody/ContentBody';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('test for Contenbody', () => {
  let setFahrenheitMock: jest.Mock<boolean>;

  beforeEach(() => {
    setFahrenheitMock = jest.fn();
  });

  it('renders content', () => {
    const content = {
      setFahrenheit: setFahrenheitMock,
      isFahrenheit: true,
    };
    render(
      <ContentBody
        isFahrenheit={content.isFahrenheit}
        setFahrenheit={content.setFahrenheit}
      />,
    );
    const textCelsius = screen.getByText('ºC');
    const textFarenheit = screen.getByText('ºF');
    const usernameFooter = screen.getByText('Alvaro Garcia');

    expect(textCelsius).toBeInTheDocument();
    expect(textFarenheit).toBeInTheDocument();
    expect(usernameFooter).toBeInTheDocument();
  });

  it('button test Celsius', () => {
    const content = {
      setFahrenheit: setFahrenheitMock,
      isFahrenheit: false,
    };
    render(
      <ContentBody
        isFahrenheit={content.isFahrenheit}
        setFahrenheit={content.setFahrenheit}
      />,
    );
    expect(setFahrenheitMock).not.toHaveBeenCalled();

    const buttonCelsius = screen.getByRole('button', { name: 'ºC' });
    fireEvent.click(buttonCelsius);
    fireEvent.click(buttonCelsius);
    expect(setFahrenheitMock).toHaveBeenCalledWith(true);
    expect(setFahrenheitMock).toHaveBeenCalledTimes(2);
  });

  it('button test Fahrenheit', () => {
    const content = {
      setFahrenheit: setFahrenheitMock,
      isFahrenheit: true,
    };
    render(
      <ContentBody
        isFahrenheit={content.isFahrenheit}
        setFahrenheit={content.setFahrenheit}
      />,
    );
    expect(setFahrenheitMock).not.toHaveBeenCalled();

    const buttonFahrenheit = screen.getByRole('button', { name: 'ºF' });
    fireEvent.click(buttonFahrenheit);

    expect(setFahrenheitMock).toHaveBeenCalledWith(false);
  });
});
