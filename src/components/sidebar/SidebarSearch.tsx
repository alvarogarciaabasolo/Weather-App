import { UseCurrentWeatherData } from '../../services/useCurrentWeather';
import CloseIcon from '../../assets/icons/close.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import {
  CloseImg,
  ContainerSidebarSearch,
  CloseDiv,
  SearchLocationDiv,
  SearchInput,
  SearchButton,
  SearchButtonText,
  ContainerSearchList,
  SearchListUl,
  SearchListLi,
  SearchListLiText,
  Arrow,
  SearchListLidiv,
} from '../../styles/SidebarSearchCSS';
import { useListCity } from '../../services/useListCity';
import { LongLatValueProps } from '../../services/useCurrentWeather';
import { Dispatch, SetStateAction } from 'react';
interface SidebarSearchProps extends UseCurrentWeatherData {
  setStateInput: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface SidebarProps extends SidebarSearchProps {
  setLonLatValue: Dispatch<React.SetStateAction<LongLatValueProps | undefined>>;
  setIsCoords: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export const SidebarSearch = ({
  setStateInput,
  setCity,
  city,
  setCityLocal,
  setLonLatValue,
  setIsCoords,
}: SidebarProps) => {
  const { listCity } = useListCity();

  const handleCloseSidebarSearch = () => {
    setStateInput(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setCityLocal(city);
    setCity('');
  };

  const handleClickLatLong = (list: {
    lat: number;
    lon: number;
    state: string;
    name: string;
  }) => {
    const { lat, lon, state, name } = list;
    const stateCountry = state ? state : '';
    setLonLatValue({ lat, lon, stateCountry, name });
    setStateInput(true);
    if (setIsCoords) {
      setIsCoords(false);
    }
  };
  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setCity(event.target.value);
  };

  return (
    <ContainerSidebarSearch>
      <CloseDiv>
        <CloseImg
          src={CloseIcon}
          onClick={handleCloseSidebarSearch}
          alt="Close Icon"
        />
      </CloseDiv>
      <SearchLocationDiv onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="search location"
          value={city}
          onChange={handleChange}
        />
        <SearchButton type="submit">
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      </SearchLocationDiv>

      <ContainerSearchList>
        <SearchListUl>
          {listCity &&
            listCity.map((list) => (
              <SearchListLi
                key={list.lat}
                onClick={() => handleClickLatLong(list)}
              >
                <SearchListLidiv>
                  <SearchListLiText>
                    {list.name}
                    {', '}
                    {list.state}{' '}
                  </SearchListLiText>
                  <Arrow src={arrowIcon} alt="Arrow Icon" />
                </SearchListLidiv>
              </SearchListLi>
            ))}
        </SearchListUl>
      </ContainerSearchList>
    </ContainerSidebarSearch>
  );
};
