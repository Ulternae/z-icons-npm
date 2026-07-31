import React from 'react';

export const LanAxeBattleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32v480c0 17.7 14.3 32 32 32s32-14.3 32-32zm-112 74.6c-33.8-19.5-59.7-51-72.1-88.7C100.1 6.2 85.6.6 76.8 9.2 29.4 55.7 0 120.4 0 192s29.4 136.3 76.8 182.8c8.8 8.6 23.3 3 27.2-8.7 12.4-37.7 38.3-69.2 72.1-88.7V106.6zm160 170.8c33.8 19.5 59.7 51 72.1 88.7 3.8 11.7 18.3 17.3 27.2 8.7 38.3-37.5 64.8-86.9 73.6-142.3L448 192l60.8-40.5C500 96.2 473.5 46.7 435.2 9.2c-8.8-8.6-23.3-3-27.2 8.7-12.3 37.7-38.3 69.2-72.1 88.7v170.8z"})
);

export default LanAxeBattleSolid;
