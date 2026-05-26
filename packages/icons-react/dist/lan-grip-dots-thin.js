import React from 'react';

export const LanGripDotsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 208a48 48 0 1 1 0-96 48 48 0 1 1 0 96m64-48a64 64 0 1 0-128 0 64 64 0 1 0 128 0m176 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m240 64a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m48 256a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128M256 400a48 48 0 1 1 0-96 48 48 0 1 1 0 96m64-48a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-208 0a48 48 0 1 1-96 0 48 48 0 1 1 96 0m-48-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128"})
);

export default LanGripDotsThin;
