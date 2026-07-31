import React from 'react';

export const LanSemicolonSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128m54.8 319L83.7 492.8C76.4 504.7 63.5 512 49.5 512 24 512 5 488.5 10.3 463.6L37.5 337c6.1-28.6 31.4-49 60.6-49 34.2 0 61.9 28.1 61.9 62.3 0 11.5-3.2 22.9-9.2 32.7"})
);

export default LanSemicolonSolid;
