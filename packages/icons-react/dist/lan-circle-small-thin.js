import React from 'react';

export const LanCircleSmallThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 304a160 160 0 1 0 0-320 160 160 0 1 0 0 320"})
);

export default LanCircleSmallThin;
