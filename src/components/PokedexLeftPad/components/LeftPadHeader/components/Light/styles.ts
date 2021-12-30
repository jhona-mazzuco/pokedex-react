import styled from "styled-components";
import { colors } from "../../../../../../styles/colors";

export const Container = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50px;
  border: 2px solid ${colors.border};
  background: ${props => props.color};
  box-shadow: inset -2px -3px 0px rgb(255, 255, 255, 0.2), 0 0 4px ${colors.border};
  margin: 0 4px;
  
  &::before {
    content: '';
    width: 4px;
    height: 5px;
    background: rgb(255, 255, 255, 0.45);
    display: block;
    position: relative;
    top: 2px;
    left: 3px;
    border-radius: 100px 50px 75px 30px;
    transform: rotate(10deg);
  }
`;
