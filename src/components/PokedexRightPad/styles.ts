import styled from "styled-components";
import { border } from "../../styles/border";
import { colors } from "../../styles/colors";

export const Container = styled.div`
  grid-area: right;
  width: 280px;
  height: 370px;
  background: ${colors.darkBackground};
  position: relative;
  top: 130px;
  left: -10px;
  border-bottom: ${border};
  border-bottom-right-radius: 40px;
`;
