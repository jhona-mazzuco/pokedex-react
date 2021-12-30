import styled from "styled-components";
import { colors } from "../../../../../../styles/colors";

export const Container = styled.div`
  width: 85px;
  height: 85px;
  border: 2px solid ${colors.border};
  border-radius: 50px;
  background: #dde0dd;
  box-shadow: inset 0px -1px 4px rgb(0, 0, 0, 0.5), 0 0 4px ${colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Light = styled.div`
  width: 70px;
  height: 70px;
  border: 2px solid ${ colors.border };
  border-radius: 50px;
  background: #05fbfb;
  box-shadow: inset -4px -10px 30px #fff, 0 1px 4px ${colors.border};
  z-index: 10;

  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: rgb(255, 255, 255, 0.45);
    display: block;
    position: relative;
    top: 10px;
    left: 12px;
    border-radius: 100px 50px 75px 30px;
    transform: rotate(6deg);
  }
`;
