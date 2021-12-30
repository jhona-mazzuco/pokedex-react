import styled from "styled-components";
import { lightBorder } from "../../../../../../../../../../styles/border";
import { colors } from "../../../../../../../../../../styles/colors";

export const View = styled.div`
  width: 110px;
  height: 50px;
  background: #52ae5f;
  border: ${ lightBorder };
  box-shadow: 1px 1px 4px ${colors.border};
  border-radius: 6px;
`;
