import React from 'react';

export const LanSpinnerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0m0 416a48 48 0 1 1 96 0 48 48 0 1 1-96 0M48 208a48 48 0 1 1 0 96 48 48 0 1 1 0-96m368 48a48 48 0 1 1 96 0 48 48 0 1 1-96 0M75 369.1a48 48 0 1 1 67.9 67.9A48 48 0 1 1 75 369.1M75 75a48 48 0 1 1 67.9 67.9A48 48 0 1 1 75 75m362 294.1a48 48 0 1 1-67.9 67.9 48 48 0 1 1 67.9-67.9"})
);

export default LanSpinnerSolid;
