import React from 'react';

export const LanCircleDivideSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-384a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-88 104h176c13.3 0 24 10.7 24 24s-10.7 24-24 24H168c-13.3 0-24-10.7-24-24s10.7-24 24-24m56 120a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanCircleDivideSolid;
