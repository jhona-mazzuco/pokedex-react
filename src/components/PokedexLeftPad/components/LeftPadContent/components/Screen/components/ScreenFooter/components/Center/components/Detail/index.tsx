import React from 'react';
import { Container, Row } from './styles';

const Detail = () => {
  return (
    <Container>
      { Array(5).fill(1).map((value, index) => (<Row key={ index.toString() }/>)) }
    </Container>
  );
};

export default Detail;
