import styled from "styled-components";
import { lightBorder } from "../../../../../../../../styles/border";
import { colors } from "../../../../../../../../styles/colors";

export const Container = styled.div`
  display: grid;
  grid-template: 'left center right';
  background: ${ colors.screenPanelBackground };
`;

export const View = styled.div`
  grid-area: center;
  width: 225px;
  height: 140px;
  border-radius: 8px;
  background: ${ colors.screenLedBackground };
`;

const screenBarWidth = '25px';
const screenBarHeight = '142px';

export const LeftBar = styled.div`
  grid-area: left;
  width: ${ screenBarWidth };
  height: ${ screenBarHeight };
  border-left: ${ lightBorder };
`;

export const RightBar = styled.div`
  grid-area: right;
  width: ${ screenBarWidth };
  height: ${ screenBarHeight };
  border-right: ${ lightBorder };
`;
