import React from 'react';

export const LanHThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M368 256v216c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v200H16V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V256z"})
);

export default LanHThin;
