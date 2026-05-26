import React from 'react';

export const LanGridRoundThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 88a40 40 0 1 1-80 0 40 40 0 1 1 80 0M56 32a56 56 0 1 0 0 112 56 56 0 1 0 0-112m40 224a40 40 0 1 1-80 0 40 40 0 1 1 80 0m-40-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0 184a40 40 0 1 1 0 80 40 40 0 1 1 0-80M0 424a56 56 0 1 0 112 0 56 56 0 1 0-112 0M264 88a40 40 0 1 1-80 0 40 40 0 1 1 80 0m-40-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0 184a40 40 0 1 1 0 80 40 40 0 1 1 0-80m-56 40a56 56 0 1 0 112 0 56 56 0 1 0-112 0m96 168a40 40 0 1 1-80 0 40 40 0 1 1 80 0m-40-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112M392 48a40 40 0 1 1 0 80 40 40 0 1 1 0-80m-56 40a56 56 0 1 0 112 0 56 56 0 1 0-112 0m96 168a40 40 0 1 1-80 0 40 40 0 1 1 80 0m-40-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0 184a40 40 0 1 1 0 80 40 40 0 1 1 0-80m-56 40a56 56 0 1 0 112 0 56 56 0 1 0-112 0"})
);

export default LanGridRoundThin;
