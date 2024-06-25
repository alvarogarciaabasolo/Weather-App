import styled from 'styled-components';

export const ContentMain = styled.main`
  display: grid;
  grid-template-columns: minmax(459px, auto) 1fr;
  height: 100vh;
  width: 100vw;

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    justify-content: center;
  }
`;
