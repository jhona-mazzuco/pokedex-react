import styled from "styled-components";
import { border } from "../../../../../../../../../../../../styles/border";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Row = styled.div`
  width: 20px;
  height: 1px;
  border-top: ${border};
  border-width: 1px;
  margin: 1px 0;
`;
