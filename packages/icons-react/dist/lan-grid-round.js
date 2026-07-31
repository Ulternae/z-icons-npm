import React from 'react';

export const LanGridRound = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M80 88a24 24 0 1 1-48 0 24 24 0 1 1 48 0M56 32a56 56 0 1 0 0 112 56 56 0 1 0 0-112m24 224a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48M0 424a56 56 0 1 0 112 0 56 56 0 1 0-112 0M248 88a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-56 24a56 56 0 1 0 112 0 56 56 0 1 0-112 0m80 168a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112M392 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-56 24a56 56 0 1 0 112 0 56 56 0 1 0-112 0m80 168a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-56a56 56 0 1 0 0 112 56 56 0 1 0 0-112m0 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-56 24a56 56 0 1 0 112 0 56 56 0 1 0-112 0"})
);

export default LanGridRound;
