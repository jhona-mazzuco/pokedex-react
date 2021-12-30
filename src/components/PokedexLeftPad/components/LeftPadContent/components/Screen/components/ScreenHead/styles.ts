import styled from "styled-components";
import { border, lightBorder } from "../../../../../../../../styles/border";
import { colors } from "../../../../../../../../styles/colors";

export const Container = styled.div`
  width: 275px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${ colors.screenPanelBackground };
  border-top: ${ lightBorder };
  border-left: ${ lightBorder };
  border-right: ${ lightBorder };
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
`;

export const Light = styled.div`
  width: 6px;
  height: 6px;
  background: ${ colors.background };
  border: ${ border };
  border-width: 1px;
  border-radius: 25px;
  margin: 0 8px;
`;
