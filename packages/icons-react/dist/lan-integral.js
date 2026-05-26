import React from 'react';

export const LanIntegral = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M232 32c-30.9 0-56 25.1-56 56v336c0 48.6-39.4 88-88 88S0 472.6 0 424v-24c0-8.8 7.2-16 16-16s16 7.2 16 16v24c0 30.9 25.1 56 56 56s56-25.1 56-56V88c0-48.6 39.4-88 88-88s88 39.4 88 88v24c0 8.8-7.2 16-16 16s-16-7.2-16-16V88c0-30.9-25.1-56-56-56"})
);

export default LanIntegral;
