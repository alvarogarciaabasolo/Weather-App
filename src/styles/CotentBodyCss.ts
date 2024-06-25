import styled from 'styled-components';

export const ContentSection = styled.section`
  background: var(--color-secondary);
  display: flex;
  flex-direction: column;
`;

export const ChangeTemperature = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 42px;
  margin-bottom: 66px;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const Celsius = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 54px;
  background: #e7e7eb;
  box-sizing: border-box;
  cursor: pointer;
  
`;
export const CelsiusText = styled.div`
  width: 18.095px;
  height: 20px;
  color: #110e3c;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-sizing: border-box;
`;
export const Fahrenheit = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 54px;
  background: #585676;
  margin-right: 125px;
  box-sizing: border-box;
  cursor:pointer;

`;
export const FahrenheitText = styled.div`
  width: 16.19px;
  height: 20px;
  color: #e7e7eb;
  text-align: center;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-sizing: border-box;
`;

export const HumidityContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const Footer = styled.footer`
  color: #a09fb1;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-block: auto;
  padding-top: 20px;
  @media (max-width: 500px) {
    margin-top: 96px;
    margin-bottom: 24px;
  }
`;
export const UsernameFooter = styled.span`
  color: #a09fb1;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
`;
