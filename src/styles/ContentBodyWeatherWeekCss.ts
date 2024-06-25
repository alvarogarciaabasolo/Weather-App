import styled from 'styled-components';

export const WeatherWeek = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 26px;
  margin-bottom: 66px;
  @media (max-width: 500px) {
    justify-content: flex-start;
    margin-left: 54px;
    margin-top: 52px;
  }
`;
export const DayWeek = styled.div`
  width: 120px;
  height: 177px;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const DayOfWeek = styled.p`
  color: #e7e7eb;
  text-align: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;
export const DayWeekImg = styled.img``;
export const DayWeekTempMaxMin = styled.div`
  display: flex;
  justify-content: space-around;
  color: #a09fb1;
`;
export const Max = styled.span`
  color: #e7e7eb;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Min = styled.span`
  color: #a09fb1;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const Loading = styled.div`
display: flex;
justify-content: center;
align-items: center;
`
export const LoadingText = styled.span`
color: white;
`
export const WeatherWeekCointainer = styled.div`
display: flex;
`