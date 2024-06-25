import styled from 'styled-components';

export const WeatherToday = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  > :first-child {
    margin-bottom: 32px;
  }
  & > :nth-child(2) {
    margin-bottom: 48px;
  }
`;
export const TextWeatherToday = styled.p`
  color: #e7e7eb;
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
`;
export const WindWswText = styled.p`
  color: #e7e7eb;
  font-family: Raleway;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const WindStatus = styled.div`
  width: 328px;
  height: 204px;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Humidity = styled.div`
  width: 328px;
  height: 204px;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Visibility = styled.div`
  width: 328px;
  height: 159px;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AirPressure = styled.div`
  width: 328px;
  height: 159px;
  background: #1e213a;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const WindHumidity = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const VisibilityAirPressure = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const ContentTextWeatherToday = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    margin-left: 21px;
  }
`;
export const HightlightsText = styled.p`
  color: #e7e7eb;
  text-align: center;
  font-family: Raleway;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const WindStatusValue = styled.p`
  color: #e7e7eb;
  font-family: Raleway;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
// ${(props) => ((props.$humidity ?? 0) * 229) / 100}px;
export const WindStatusValueSpan = styled.span`
  color: #e7e7eb;
  font-family: Raleway;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const WindStatusWsw = styled.div`
  display: flex;
  align-items: center;
  gap: 5.71px;
  margin-top: 31px;
`;
interface WindImgProps {
  $winddeg: number;
}
export const WindImg = styled.div<WindImgProps>`
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  width: 29.49px;
  height: 29.49px;
  display: flex;
  transform: ${(props) => `rotate(${props.$winddeg}deg)`};
`;
export const HumidityValue = styled.p`
  color: #e7e7eb;
  text-align: center;
  font-family: Raleway;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 12px;
`;
export const HumidityValuetext = styled.span`
  color: #e7e7eb;
  font-family: Raleway;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const VisibilityValue = styled.p`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-size: 64px;
  font-weight: 700;
`;
export const HumidityPercentageValue = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const HumidityRectangule = styled.div`
  background: #e7e7eb;
  border-radius: 80px;
  width: 229px;
  height: 8px;
  box-sizing: border-box;
  display: flex;
`;
export const HumidityPercentage = styled.p`
  color: #a09fb1;
  text-align: center;
  font-family: 'Raleway';
  font-size: 12px;
  font-weight: 700;
  margin: 4px 50px 0 0;
`;
export const HumidityRectanguleYellow = styled.div<{ $humidity?: number }>`
  background: #ffec65;
  border-radius: 80px;
  width: ${(props) => ((props.$humidity ?? 0) * 229) / 100}px;
  height: 8px;
  box-sizing: border-box;
  display: flex;
`;
export const HumidityPercentageValueText = styled.p`
  color: #a09fb1;
  text-align: center;
  font-family: 'Raleway';
  font-size: 12px;
  font-weight: 700;
`;
export const HumidityPercentageDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const HumidityRectanguleDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export const AirPressureValue = styled.p`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-size: 64px;
  font-weight: 700;
`;
export const VisibilityValueText = styled.span`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  font-weight: 500;
`;
export const AirPressureValueTex = styled.span`
  color: #e7e7eb;
  font-family: 'Raleway', sans-serif;
  font-size: 36px;
  font-weight: 500;
`;
