import React from 'react';

export const LanGridRoundSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M112 88A56 56 0 1 1 0 88a56 56 0 1 1 112 0m0 168a56 56 0 1 1-112 0 56 56 0 1 1 112 0M0 424a56 56 0 1 1 112 0 56 56 0 1 1-112 0M280 88a56 56 0 1 1-112 0 56 56 0 1 1 112 0M168 256a56 56 0 1 1 112 0 56 56 0 1 1-112 0m112 168a56 56 0 1 1-112 0 56 56 0 1 1 112 0m56-336a56 56 0 1 1 112 0 56 56 0 1 1-112 0m112 168a56 56 0 1 1-112 0 56 56 0 1 1 112 0M336 424a56 56 0 1 1 112 0 56 56 0 1 1-112 0"})
);

export default LanGridRoundSolid;
