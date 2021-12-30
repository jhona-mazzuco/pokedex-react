import React from 'react';
import { Container, Light } from './styles';

const ScreenHead = () => {
  return (
    <Container>
      { Array(2).fill(1).map((value, index) => (<Light key={ index.toString() }/>)) }
    </Container>
  );
};

export default ScreenHead;
