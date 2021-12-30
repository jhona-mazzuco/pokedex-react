import styled from "styled-components";
import { border } from "../../styles/border";
import { colors } from "../../styles/colors";

export const Wrapper = styled.div`
  grid-area: left;
  z-index: -1;
  width: 360px;
  height: 500px;
  display: flex;
  flex-direction: column;
  background: ${colors.darkBackground};
  border-left: ${border};
  border-top: ${border};
  border-bottom: ${border};
  border-top-left-radius: 25px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  box-shadow: inset 1px 0 10px ${colors.border};
`;
