import styled from "styled-components";
import { border } from "../../../../styles/border";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  width: 140px;
  height: 60px;
  background: ${ colors.background };
  border-top: ${ border };
  border-top-right-radius: 8px;
  position: relative;
  top: -58px;
  left: -4px;

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 1px;
    padding-top: 4px solid ${colors.background};
    position: absolute;
    left: -100px;
  }
  
  &::after {
    content: '';
    display: block;
    width: 84px;
    border-top: ${ border };
    border-top-left-radius: 8px;
    border-bottom-right-radius: 8px;
    position: absolute;
    right: -65px;
    top: 25px;
    transform: rotate(45deg);
  }
`;
