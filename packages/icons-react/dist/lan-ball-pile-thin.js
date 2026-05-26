import React from 'react';

export const LanBallPileThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M80 512a80 80 0 1 1 0-160 80 80 0 1 1 0 160m208 0a80 80 0 1 1 0-160 80 80 0 1 1 0 160m208 0a80 80 0 1 1 0-160 80 80 0 1 1 0 160M80 368a64 64 0 1 0 0 128 64 64 0 1 0 0-128m208 0a64 64 0 1 0 0 128 64 64 0 1 0 0-128m208 0a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-320-40a80 80 0 1 1 0-160 80 80 0 1 1 0 160m224 0a80 80 0 1 1 0-160 80 80 0 1 1 0 160m0-144a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-224 0a64 64 0 1 0 0 128 64 64 0 1 0 0-128m112-24a80 80 0 1 1 0-160 80 80 0 1 1 0 160m0-144a64 64 0 1 0 0 128 64 64 0 1 0 0-128"})
);

export default LanBallPileThin;
