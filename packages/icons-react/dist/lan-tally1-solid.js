import React from 'react';

export const LanTally1Solid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32S0 465.7 0 448V64c0-17.7 14.3-32 32-32"})
);

export default LanTally1Solid;
