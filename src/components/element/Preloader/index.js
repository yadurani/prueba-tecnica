import React from 'react';
import { PreloaderContent } from './style.js';

const Preloader = () => {
  return (
    <PreloaderContent>
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </PreloaderContent>
  );
};

export default Preloader;
