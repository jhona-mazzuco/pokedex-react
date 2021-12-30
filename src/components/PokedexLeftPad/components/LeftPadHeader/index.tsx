import React from 'react';
import BootLight from "./components/BootLight";
import Light from "./components/Light";
import { Container, DockingArea, LightArea } from './styles';

const LeftPadHeader = () => {
  return (
    <Container>
      <LightArea>
        <BootLight />
        { ['#d5072¶7', '#f9e243', '#589e61'].map(color => <Light key={color} color={color} />) }
      </LightArea>
      <DockingArea />
    </Container>
  );
};

export default LeftPadHeader;
