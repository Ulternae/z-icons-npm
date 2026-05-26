import React from 'react';

export const LanTurtleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 240v-32c0-70.7-57.3-128-128-128S80 137.3 80 208v32zm48-32v41.2c0 21.4-17.4 38.8-38.8 38.8H70.8C49.4 288 32 270.6 32 249.2V208c0-97.2 78.8-176 176-176s176 78.8 176 176m96 80c-8.3 0-16.3-1.6-23.6-4.5C440.3 328 400.3 361 352 367v73c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-72h-32v72c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-72H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h312c44.2 0 80-35.8 80-80v-64c0-35.3 28.7-64 64-64 53 0 96 43 96 96v16c0 35.3-28.7 64-64 64zm-208 80v64h32v-64zm-160 0v64h32v-64zm384-144a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
);

export default LanTurtleRegular;
