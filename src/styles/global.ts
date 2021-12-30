import styled from "styled-components";
import background from '../assets/background.png'

export const Application = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${ background }) no-repeat;
  background-size: cover;
`;

export const Pokedex = styled.div`
  display: flex;
  z-index: 10;
`;
