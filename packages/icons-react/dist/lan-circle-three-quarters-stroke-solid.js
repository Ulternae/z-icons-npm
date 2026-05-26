import React from 'react';

export const LanCircleThreeQuartersStrokeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 64v160c0 17.7 14.3 32 32 32h160c0-106-86-192-192-192M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0"})
);

export default LanCircleThreeQuartersStrokeSolid;
