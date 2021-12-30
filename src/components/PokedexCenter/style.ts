import styled from "styled-components";
import { border, lightBorder } from "../../styles/border";
import { colors } from "../../styles/colors";

const widthConnection = '52px';

const headerConnectionDefaultProps = `
    content: '';
    display: block;
    width: 53px;
    height: 10px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    background: ${ colors.background };
    border-top: ${ border };
    position: absolute;
    top: -13px;
    left: -1px;
`

export const Container = styled.div`
  grid-area: center;
  padding-top: 66px;
  z-index: 100;
  position: relative;
  left: -10px;
`;

export const TopConnection = styled.div`
  position: relative;
  width: 52px;
  height: 30px;
  margin-top: 10px;
  background: ${ colors.background };
  border-left: ${ lightBorder };
  border-right: ${ lightBorder };
  z-index: 50;

  &::after {
    ${ headerConnectionDefaultProps };
  }
`

export const CenterConnection = styled.div`
  width: ${ widthConnection };
  height: 350px;
  margin-top: 4px;
  position: relative;
  border-left: ${ lightBorder };
  border-right: ${ lightBorder };
  background: ${ colors.background };
  z-index: 60;

  &::after {
    ${ headerConnectionDefaultProps };
  }
`;

export const BottomConnection = styled.div`
  width: ${ widthConnection };
  height: 30px;
  background: ${ colors.background };
  position: relative;
  border-left: ${ lightBorder };
  border-right: ${ lightBorder };
  z-index: 70;

  &::after {
    ${ headerConnectionDefaultProps };
  }

  &::before {
    content: '';
    display: block;
    width: 54px;
    height: 19px;
    background: ${ colors.darkBackground };
    position: absolute;
    bottom: -16px;
    left: -3px;
    z-index: 100;
    border-radius: 70px;
    border: ${ lightBorder }
  }
`;
