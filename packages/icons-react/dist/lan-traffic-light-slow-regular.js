import React from 'react';

export const LanTrafficLightSlowRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 16c-8.8 0-16 7.2-16 16v352c0 61.9 50.1 112 112 112s112-50.1 112-112V32c0-8.8-7.2-16-16-16zM0 32C0-3.3 28.7-32 64-32h192c35.3 0 64 28.7 64 64v352c0 88.4-71.6 160-160 160S0 472.4 0 384zm160 312c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56m56-88a56 56 0 1 1-112 0 56 56 0 1 1 112 0m-56-88a56 56 0 1 1 0-112 56 56 0 1 1 0 112m24-56a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 312c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24"})
);

export default LanTrafficLightSlowRegular;
