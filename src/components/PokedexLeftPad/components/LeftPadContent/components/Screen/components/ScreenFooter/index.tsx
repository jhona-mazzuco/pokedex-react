import React from 'react';
import Center from './components/Center';
import { Container, Left, Right } from './styles';

const ScreenFooter = () => {
  return (
    <Container>
      <Left/>
      <Center/>
      <Right/>
    </Container>
  );
};

export default ScreenFooter;
