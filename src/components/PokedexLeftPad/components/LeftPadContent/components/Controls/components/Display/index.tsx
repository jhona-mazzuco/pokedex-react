import React from 'react';
import Led from "./components/Led";
import { Container, Light, LightBar } from './styles';

const Display = () => {
  return (
    <Container>
      <LightBar>
        <Light background="#ea092d"/>
        <Light background="#12577b"/>
      </LightBar>
      <Led />
    </Container>
  );
};

export default Display;
