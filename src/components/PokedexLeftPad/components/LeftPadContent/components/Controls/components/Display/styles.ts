import styled from "styled-components";
import { lightBorder } from "../../../../../../../../styles/border";
import { colors } from "../../../../../../../../styles/colors";

export const Container = styled.div`
  width: 110px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 18px;
  margin: 0 14px;
`;

export const LightBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
`;

type LightProps = {
  background: string;
}

export const Light = styled.span`
  width: 34px;
  height: 2px;
  border: ${ lightBorder };
  border-radius: 8px;
  background: ${ (props: LightProps) => props.background };
  box-shadow: 0 1px 2px ${ colors.border };
`;
