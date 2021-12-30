import React from 'react';
import LeftPadContent from "./components/LeftPadContent";
import LeftPadHeader from "./components/LeftPadHeader";
import { Wrapper } from './styles';

const PokedexLeftPad = () => {
  return (
    <Wrapper>
      <LeftPadHeader/>
      <LeftPadContent/>
    </Wrapper>
  );
};

export default PokedexLeftPad;
