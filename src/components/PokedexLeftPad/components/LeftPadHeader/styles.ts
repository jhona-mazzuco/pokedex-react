import styled from "styled-components";
import { border } from "../../../../styles/border";
import { colors } from "../../../../styles/colors";

export const Container = styled.div`
  position: relative;
  bottom: 3px;
  left: 20px;
  display: grid;
  grid-template: 'light dock';
`;

export const LightArea = styled.div`
  grid-area: light;
  display: inline-flex;
  background: ${ colors.background };
  padding: 4px 0 4px 8px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 16px;
  border-top: ${ border };
  border-left: ${ border };
  border-bottom: ${ border };
  position: relative;
  right: 16px;

  &::after {
    content: '';
    width: 45px;
    height: 20px;
    display: block;
    position: absolute;
    bottom: 6px;
    border-bottom: 3px solid #000;
    right: -16px;
    transform: rotate(-66deg);
    border-bottom-left-radius: 22px;
    background: ${ colors.background };

  }
`;

export const DockingArea = styled.div`
  grid-area: dock;
  background: ${ colors.background };
  border-top: ${ border };
  border-right: ${ border };
  width: 210px;
  height: 62px;
  position: relative;
  right: 16px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &::before {
    content: '';
    width: 15px;
    height: 12px;
    display: block;
    position: absolute;
    bottom: -13px;
    border-top: 3px solid #0e0e0e;
    border-top-left-radius: 10px;
    right: 187px;
  }

  &::after {
    content: '';
    width: 197px;
    display: block;
    border-bottom: ${ border };
    position: absolute;
    top: 50px;
    left: 16px;
    border-bottom-right-radius: 16px;
    height: 10px;
  }
}
`;
