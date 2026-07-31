import React from 'react';

export const LanCircleUser = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M412.1 416.6c-14-55.5-64.2-96.6-124.1-96.6h-64c-59.9 0-110.1 41.1-124.1 96.6C58 375.9 32 319 32 256 32 132.3 132.3 32 256 32s224 100.3 224 224c0 63-26 119.9-67.9 160.6M383.6 440c-36.1 25.2-80.2 40-127.6 40s-91.5-14.8-127.7-39.9c4-49.3 45.3-88.1 95.7-88.1h64c50.4 0 91.6 38.8 95.7 88.1zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-272a48 48 0 1 1 0-96 48 48 0 1 1 0 96m-80-48a80 80 0 1 0 160 0 80 80 0 1 0-160 0"})
);

export default LanCircleUser;
