import styled from "styled-components";
import { lightBorder } from "../../../../../../../../styles/border";
import { colors } from "../../../../../../../../styles/colors";

export const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  z-index: 20;
  grid-template: 
          '. arrow-up .'
          'arrow-left center arrow-right'
          '. arrow-bottom .';
`;

const yArrowWidth = '18px';
const yArrowHeight = '30px';

export const ArrowUp = styled.div`
  z-index: -1;
  grid-area: arrow-up;
  background: ${ colors.buttonBackground };
  box-shadow: 1px 2px 4px ${ colors.border };
  border-top: ${ lightBorder };
  border-left: ${ lightBorder };
  border-right: ${ lightBorder };
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  width: ${ yArrowWidth };
  height: ${ yArrowHeight };
  position: relative;
  top: 5px;
`;

export const ArrowBottom = styled.div`
  z-index: -1;
  grid-area: arrow-bottom;
  background: ${ colors.buttonBackground };
  box-shadow: 1px 2px 4px ${ colors.border };
  border-bottom: ${ lightBorder };
  border-left: ${ lightBorder };
  border-right: ${ lightBorder };
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  width: ${ yArrowWidth };
  height: ${ yArrowHeight };
  position: relative;
  bottom: 6px;
`;

const xArrowWidth = '30px';
const xArrowHeight = '18px';

export const ArrowLeft = styled.div`
  z-index: -1;
  grid-area: arrow-left;
  background: ${ colors.buttonBackground };
  box-shadow: 1px 2px 4px ${ colors.border };
  border-bottom: ${ lightBorder };
  border-left: ${ lightBorder };
  border-top: ${ lightBorder };
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  width: ${ xArrowWidth };
  height: ${ xArrowHeight };
`;

export const ArrowRight = styled.div`
  z-index: -1;
  grid-area: arrow-right;
  background: ${ colors.buttonBackground };
  width: ${ xArrowWidth };
  height: ${ xArrowHeight };
  box-shadow: 1px 2px 4px ${ colors.border };
  border-bottom: ${ lightBorder };
  border-top: ${ lightBorder };
  border-right: ${ lightBorder };
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
`;

export const Center = styled.div`
  grid-area: center;
  width: 22px;
  height: 20px;
  background: ${ colors.buttonBackground };
`;
