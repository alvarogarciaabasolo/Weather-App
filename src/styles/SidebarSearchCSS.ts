import styled from 'styled-components';
import SearchIcon from '../assets/icons/search.svg';
import pointerIcon from '../assets/icons/pointer.svg'

export const ContainerSidebarSearch = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
export const CloseDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12px;
  margin-right: 46px;
  cursor: pointer;
`;
export const CloseImg = styled.img`
  width: 32px;
  height: 32px;
`;
export const SearchLocationDiv = styled.form`
  display: flex;
  gap: 12px;
  margin-left: 47px;
  margin-top: 38px;
`;

export const SearchButton = styled.button`
  background: #3c47e9;
  width: 86px;
  height: 48px;
  box-sizing: border-box;
`;
export const SearchButtonText = styled.span`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 600;
`;
export const SearchInputDiv = styled.div`
  background: #1e213a;
  border: 1px solid #e7e7eb;
  width: 268px;
  height: 48px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;
export const SearchInputIcon = styled.img`
  width: 24px;
  height: 24px;
  border: 1px solid #e7e7eb;
  overflow: visible;
`;
export const SearchInput = styled.input`
  background: #1e213a;
  height: 48px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 12px center;
  box-sizing: border-box;
  border: 1px solid #e7e7eb;
  width: 268px;

  color: #e7e7eb;
  padding-left: 49px;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    color: #616475;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 500;
    margin-left: 10px;
  }
`;
export const ContainerSearchList = styled.div`
  margin-top: 58px;
`;
export const SearchListUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
export const SearchListLi = styled.li`
  margin-left: 47px;
`;
export const Arrow = styled.img`
  visibility: hidden;
  width: 24px;
  height: 24px;
  padding-right: 8px;
`;
export const SearchListLiText = styled.span`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  font-weight: 500;
  box-sizing: border-box;
  padding-left: 12px;
  padding-top: 23px;
  margin-bottom: 22px;
`;
export const SearchListLidiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 50px;
  &:hover {
    border: 1px solid #616475;
    width: 367px;
    height: 64px;
    box-sizing: border-box;
    cursor: url(${pointerIcon}), auto;
  }
  &:hover ${Arrow} {
    visibility: visible;
  }
`;
