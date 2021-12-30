import React from 'react';
import Controls from "./components/Controls";
import Screen from "./components/Screen";
import { Container, Content, ContentHeader, ContentWrapper, FillElement, Header } from './styles';

const LeftPadContent = () => {
  return (
    <Container>
      <Header/>
      <FillElement/>
      <Content>
        <ContentHeader/>
        <ContentWrapper>
          <Screen/>
          <Controls/>
        </ContentWrapper>
      </Content>
    </Container>
  );
};

export default LeftPadContent;
