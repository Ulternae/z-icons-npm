import React from 'react';

export const LanGripDots = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 192a32 32 0 1 1 0-64 32 32 0 1 1 0 64m64-32a64 64 0 1 0-128 0 64 64 0 1 0 128 0m160 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m224 64a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m32 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-192 96a32 32 0 1 1 0-64 32 32 0 1 1 0 64m64-32a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-224 0a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-32-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128"})
);

export default LanGripDots;
