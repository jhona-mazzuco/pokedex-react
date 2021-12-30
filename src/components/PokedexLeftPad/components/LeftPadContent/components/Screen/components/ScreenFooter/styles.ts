import styled from "styled-components";
import { lightBorder } from "../../../../../../../../styles/border";
import { colors } from "../../../../../../../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
`;

export const Left = styled.div`
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 16px solid transparent;
  border-left: 20px solid ${ colors.screenPanelBackground };
  transform: rotate(-45deg);
  position: absolute;
  top: -13px;
  left: 12px;

  &::before {
    content: '';
    display: block;
    width: 1px;
    height: 40px;
    border-left: ${ lightBorder };
    position: absolute;
    left: -22px;
    top: -21px;
  }
`;

export const Right = styled.div`
  width: 30px;
  height: 27px;
  background: ${colors.screenPanelBackground};
  position: absolute;
  right: 0;
  border-right: ${lightBorder};
  border-bottom: ${lightBorder};
  border-bottom-right-radius: 4px;
`;

