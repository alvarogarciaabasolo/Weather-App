import styled from 'styled-components';

export const SidebarSection = styled.section`
  background: var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 500px) {
    min-width: 459px;
    min-height: 810px;
  }
`;
export const Input = styled.input`
  background: #6e707a;
  width: 161px;
  height: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  caret-color: transparent;
  &::placeholder {
    color: #e7e7eb;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
`;
export const IconGps = styled.div`
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;
export const TopDiv = styled.div`
  flex-shrink: 1;
  display: flex;
  justify-content: center;
  margin-top: 42px;
  gap: 166px;
  @media (max-width: 500px) {
    gap: 151px;
  }
`;
export const WeatherDat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ImgDescription = styled.img`
  width: 202px;
  height: 234px;
  object-fit: cover;
`;
export const Temperature = styled.p`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-size: 144px;
  font-weight: 500;
  line-height: normal;
  margin: 0px;
  margin-bottom: 87px;
  box-sizing: border-box;
`;
export const TemperatureText = styled.span`
  color: #a09fb1;
  font-family: 'Raleway', sans-serif;
  font-size: 48px;
  margin: 0px;
`;
export const WeatherMain = styled.p`
  color: #a09fb1;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin: 0px;
`;
export const DateDay = styled.p`
  color: #88869d;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 32px;
`;
export const DateDaypoint = styled.span`
  color: #88869d;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin: 0 16px;
`;
export const ContainerDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 1;
  margin-bottom: 52px;
`;
export const DatePlace = styled.p`
  color: #88869d;
  font-family: 'Raleway', sans-serif;
  font-size: 18px;
  font-weight: 600;
  display: flex;
`;
export const LocationImg = styled.img`
  margin-right: 4px;
`;
