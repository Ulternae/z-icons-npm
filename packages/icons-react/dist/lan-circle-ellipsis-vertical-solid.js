import React from 'react';

export const LanCircleEllipsisVerticalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-288a32 32 0 1 1 0 64 32 32 0 1 1 0-64m-32-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanCircleEllipsisVerticalSolid;
