import styled from "styled-components";
import { lightBorder } from "../../../../../../styles/border";
import { colors } from "../../../../../../styles/colors";

export const Container = styled.div`
  width: 330px;
  padding: 8px 0;
  display: flex;
  justify-content: space-around;
`;

export const PowerButton = styled.button`
  width: 34px;
  height: 34px;
  background: ${ colors.buttonBackground };
  border-radius: 25px;
  border: ${ lightBorder };
  box-shadow: 1px 2px 5px ${ colors.border };
`;
