import React from 'react';

export const MinaSunDim = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0m-4-7.5V5m0 14.004v.496M5 12h-.5m15 0H19m-1.5-5.5L17 7M6.5 6.5 7 7m0 10-.5.5m11 0L17 17"})
);

export default MinaSunDim;
