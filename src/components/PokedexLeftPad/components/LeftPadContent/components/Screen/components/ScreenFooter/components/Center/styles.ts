import styled from "styled-components";
import { border, lightBorder } from "../../../../../../../../../../styles/border";
import { colors } from "../../../../../../../../../../styles/colors";

export const Container = styled.div`
  width: 225px;
  height: 27px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${ colors.screenPanelBackground };
  border-bottom-left-radius: 3px;
  border-bottom: ${ lightBorder };
  margin-left: 27px;
`;

export const Light = styled.div`
  width: 10px;
  height: 10px;
  background: ${ colors.background };
  border: ${ border };
  border-width: 1px;
  border-radius: 25px;
  position: relative;
  left: 4px;
  bottom: 2px;
`;
