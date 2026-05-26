import React from 'react';

export const LanKettlebellSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M226.6.2C296.5 3.7 352 61.5 352 132.3c0 24-6.5 47.5-18.8 68l-20.6 34.3c43.6 35.2 71.5 89 71.5 149.4 0 33.8-8.8 65.5-24.1 93.1-13.3 23.9-40.5 34.9-67.8 34.9H91.8c-27.3 0-54.4-11-67.7-34.9C8.8 449.5 0 417.8 0 384c0-60.4 27.9-114.2 71.4-149.4l-20.6-34.3C38.5 179.7 32 156.2 32 132.2 32 59.2 91.2 0 164.2 0h55.5l6.8.2zM164.2 64C126.5 64 96 94.6 96 132.2c0 12.4 3.4 24.5 9.7 35.1l21.5 35.9c20.2-7.3 42-11.2 64.8-11.2 22.7 0 44.5 4 64.7 11.2l21.5-35.9c6.4-10.6 9.7-22.7 9.7-35.1 0-35.3-26.8-64.4-61.3-67.9l-7-.3h-55.5z"})
);

export default LanKettlebellSolid;
