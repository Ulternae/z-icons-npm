import React from 'react';

export const LanGripDotsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 224a64 64 0 1 1 0-128 64 64 0 1 1 0 128M256 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128m192 0a64 64 0 1 1 0 128 64 64 0 1 1 0-128m0 192a64 64 0 1 1 0 128 64 64 0 1 1 0-128M256 416a64 64 0 1 1 0-128 64 64 0 1 1 0 128M64 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
);

export default LanGripDotsSolid;
