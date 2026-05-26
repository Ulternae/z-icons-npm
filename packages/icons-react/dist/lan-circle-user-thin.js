import React from 'react';

export const LanCircleUserThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M415.4 435.4C409.1 370.6 354.5 320 288 320h-64c-66.5 0-121.1 50.6-127.4 115.4C47.2 391.5 16 327.4 16 256 16 123.5 123.5 16 256 16s240 107.5 240 240c0 71.4-31.2 135.5-80.6 179.4M400 448c-40.1 30.1-90 48-144 48s-103.9-17.9-144-48c0-61.9 50.1-112 112-112h64c61.9 0 112 50.1 112 112m-144 64a256 256 0 1 0 0-512 256 256 0 1 0 0 512m80-320a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-80-64a64 64 0 1 1 0 128 64 64 0 1 1 0-128"})
);

export default LanCircleUserThin;
