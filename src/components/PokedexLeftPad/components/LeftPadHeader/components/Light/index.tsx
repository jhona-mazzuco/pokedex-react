import React from 'react';
import { Container } from './styles';

type Props = {
  color: string
}

const Light = ({ color }: Props) => {
  return (
    <Container color={color} />
  );
};

export default Light;
