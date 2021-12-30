import React from 'react';
import Arrows from "./components/Arrows";
import Display from "./components/Display";
import { Container, PowerButton } from './styles';

const Controls = () => {
  return (
    <Container>
      <PowerButton />
      <Display />
      <Arrows />
    </Container>
  );
};

export default Controls;
