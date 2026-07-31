import React from 'react';

export const LanCars = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M86.4 56.2C90 42 102.8 32 117.5 32h149c14.7 0 27.5 10 31 24.2l13.9 55.6h33l-15.8-63.4C321.5 20 295.9 0 266.5 0h-149c-29.4 0-55 20-62.1 48.5l-21.8 87.2C13.6 146.5 0 167.7 0 192v144c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h116.6c3.4-11.6 8.7-22.3 15.4-32H32v-96c0-17.7 14.3-32 32-32h153.4c9-13 20.7-23.9 34.1-32h-183zM120 224a24 24 0 1 0-48 0 24 24 0 1 0 48 0m189.5-32h149c14.7 0 27.5 10 31 24.2l17.9 71.8h-247l17.9-71.8c3.6-14.2 16.4-24.2 31-24.2zm-62.1 16.5-21.8 87.2c-20 10.8-33.6 32-33.6 56.3v144c0 8.8 7.2 16 16 16s16-7.2 16-16v-16h320v16c0 8.8 7.2 16 16 16s16-7.2 16-16V352c0-24.3-13.6-45.5-33.6-56.3l-21.8-87.2c-7.1-28.5-32.7-48.5-62.1-48.5h-149c-29.4 0-55 20-62.1 48.5M544 384v64H224v-96c0-17.7 14.3-32 32-32h256c17.7 0 32 14.3 32 32zm-256 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m216-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanCars;
