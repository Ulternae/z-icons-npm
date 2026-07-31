import React from 'react';

export const LanTrafficLightGo = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 0C46.3 0 32 14.3 32 32v352c0 70.7 57.3 128 128 128s128-57.3 128-128V32c0-17.7-14.3-32-32-32zM0 32C0-3.3 28.7-32 64-32h192c35.3 0 64 28.7 64 64v352c0 88.4-71.6 160-160 160S0 472.4 0 384zm160 312c30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56 25.1-56 56-56m0-112a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 80a56 56 0 1 1 0-112 56 56 0 1 1 0 112m-24-200a24 24 0 1 0 48 0 24 24 0 1 0-48 0m80 0a56 56 0 1 1-112 0 56 56 0 1 1 112 0"})
);

export default LanTrafficLightGo;
