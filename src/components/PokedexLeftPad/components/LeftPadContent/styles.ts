import styled from "styled-components";
import { border, lightBorder } from "../../../../styles/border";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  width: 340px;
  height: 385px;
  background: ${ colors.background };
  position: relative;
  left: 8px;
  top: 2px;
  display: flex;
  justify-content: center;
  border-left: ${ border };
  border-bottom: ${ border };
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;

  &::before {
    content: '';
    width: 26px;
    height: 23px;
    border-top: ${ border };
    border-top-left-radius: 8px;
    position: absolute;
    right: 10px;
    left: -2px;
  }
`;

export const Header = styled.div`
  width: 140px;
  height: 40px;
  background: ${ colors.background };
  position: relative;
  left: 100px;
  bottom: 36px;
  border-top-left-radius: 15px;
  border-top: ${ border };

  &::after {
    content: '';
    width: 180px;
    height: 16px;
    display: block;
    position: absolute;
    bottom: 4px;
    border-bottom: 3px solid;
    right: 144px;
    border-bottom-right-radius: 25px;
  }
`;

export const FillElement = styled.div`
  width: 30px;
  height: 40px;
  background: ${ colors.background };
  border-left: ${ border };
  border-top-left-radius: 20px;
  position: absolute;
  top: -35px;
  right: 115px;
  transform: rotate(20deg);
`;

export const Content = styled.div`
  border-left: ${ lightBorder };
  border-bottom: ${ lightBorder };
  border-right: ${ lightBorder };
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 328px;
  height: 368px;
  position: absolute;
  top: 9px;
  left: 4px;

  &::before {
    content: '';
    width: 15px;
    height: 5px;
    display: block;
    border-top: ${ lightBorder };
  }
`;

export const ContentHeader = styled.div`
  width: 126px;
  height: 40px;
  position: absolute;
  right: -2px;
  top: -36px;
  border-top: 2px solid;
  border-right: 2px solid;
  border-top-left-radius: 8px;
  border-top-right-radius: 4px;

  &::before {
    content: '';
    width: 180px;
    height: 10px;
    display: block;
    border-bottom: ${ lightBorder };
    border-bottom-right-radius: 35px;
    position: absolute;
    top: 24px;
    left: -188px;
  }

  &::after {
    content: '';
    width: 10px;
    height: 40px;
    display: block;
    border-left: ${ lightBorder };
    border-top-left-radius: 20px;
    transform: rotate(20deg);
    position: absolute;
    top: -4px;
    left: -6px;
  }
`;

export const ContentWrapper = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
