import React from 'react';

export const LanCircleEllipsisThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m16 256a16 16 0 1 1-32 0 16 16 0 1 1 32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-176 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0"})
);

export default LanCircleEllipsisThin;
