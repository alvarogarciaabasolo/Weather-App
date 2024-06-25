import { SidebarSearch } from '../components/sidebar/SidebarSearch';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CloseIcon from '../assets/icons/close.svg';
import arrowIcon from '../assets/icons/arrow.svg';

jest.mock('../services/useListCity.ts', () => ({ useListCity: jest.fn() }));

describe('test for component sidebar Search', () => {
  beforeEach(() => {
    require('../services/useListCity').useListCity.mockImplementation(() => ({
      listCity: [
        {
          name: 'Punta umbria',
          lat: 42.2232556,
          lon: 87.2232556,
          country: 'Huelva',
          state: 'Soleado',
        },
      ],
    }));
  });

  it('render component', () => {
    render(
      <SidebarSearch
        setStateInput={jest.fn()}
        setCity={jest.fn()}
        city=""
        setCityLocal={jest.fn()}
        setLonLatValue={jest.fn()}
        setIsCoords={jest.fn()}
      />,
    );
    jest.resetAllMocks();
  });

  it('render image close', () => {
    render(
      <SidebarSearch
        setStateInput={jest.fn()}
        setCity={jest.fn()}
        city=""
        setCityLocal={jest.fn()}
        setLonLatValue={jest.fn()}
        setIsCoords={jest.fn()}
      />,
    );
    expect(screen.getByAltText('Close Icon')).toHaveAttribute('src', CloseIcon);
    jest.resetAllMocks();
  });

  it('render input change', async () => {
    const setCityMock = jest.fn();
    render(
      <SidebarSearch
        setStateInput={jest.fn()}
        setCity={setCityMock}
        city=""
        setCityLocal={jest.fn()}
        setLonLatValue={jest.fn()}
        setIsCoords={jest.fn()}
      />,
    );
    const inputValue = screen.getByRole('textbox') as HTMLInputElement;
    expect(inputValue).toBeInTheDocument();
    fireEvent.change(inputValue, { target: { value: 'mucho betis' } });

    expect(setCityMock).toHaveBeenCalledWith('mucho betis');
    jest.resetAllMocks();
  });
  it('render list city', () => {
    render(
      <SidebarSearch
        setStateInput={jest.fn()}
        setCity={jest.fn()}
        city=""
        setCityLocal={jest.fn()}
        setLonLatValue={jest.fn()}
        setIsCoords={jest.fn()}
      />,
    );

    expect(screen.getByText('Punta umbria, Soleado')).toBeInTheDocument();
    expect(screen.getByAltText('Arrow Icon')).toHaveAttribute('src', arrowIcon);

    const buttonLi = screen.getByRole('listitem');
    fireEvent.click(buttonLi);
    expect(buttonLi).toBeInTheDocument();
    jest.resetAllMocks();
  });

  it('render element for list city', () => {
    const setLonLatValueMock = jest.fn();
    render(
      <SidebarSearch
        setStateInput={jest.fn()}
        setCity={jest.fn()}
        city=""
        setCityLocal={jest.fn()}
        setLonLatValue={setLonLatValueMock}
        setIsCoords={jest.fn()}
      />,
    );
    const listItem = screen.getAllByText('Punta umbria, Soleado')[0];
    fireEvent.click(listItem);

    expect(setLonLatValueMock).toHaveBeenCalledWith({
      lat: 42.2232556,
      lon: 87.2232556,
      stateCountry: 'Soleado',
      name: 'Punta umbria',
    });
  });
});
