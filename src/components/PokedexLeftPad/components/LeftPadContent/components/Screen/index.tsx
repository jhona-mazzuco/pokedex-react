import React from 'react';
import ScreenCenter from "./components/ScreenCenter";
import ScreenFooter from './components/ScreenFooter';
import ScreenHead from './components/ScreenHead';

export const Screen = () => {
  return (
    <div>
      <ScreenHead/>
      <ScreenCenter/>
      <ScreenFooter/>
    </div>
  );
};

export default Screen;
