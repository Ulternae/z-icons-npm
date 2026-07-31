import React from 'react';

export const LanBracketRoundSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M154.6 46.2c9.8 14.8 5.9 34.6-8.8 44.4C120.1 107.7 64 167 64 256s56.1 148.3 81.8 165.4c14.7 9.8 18.7 29.7 8.9 44.4s-29.7 18.7-44.4 8.9C71.9 449 0 371.8 0 256S71.9 62.9 110.2 37.4c14.7-9.8 34.6-5.8 44.4 8.9z"})
);

export default LanBracketRoundSolid;
