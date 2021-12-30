import React from 'react';
import { BottomConnection, CenterConnection, Container, TopConnection } from './style';

const PokedexCenter = () => {
  return (
    <Container>
      <TopConnection />
      <CenterConnection />
      <BottomConnection />
    </Container>
  );
};

export default PokedexCenter;
