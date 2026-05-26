import React from 'react';

export const LanGridRound2 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0M96 448a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0m96-256a64 64 0 1 0 128 0 64 64 0 1 0-128 0m64 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 224a64 64 0 1 0 0-128 64 64 0 1 0 0 128m96-64a96 96 0 1 1-192 0 96 96 0 1 1 192 0"})
);

export default LanGridRound2;
