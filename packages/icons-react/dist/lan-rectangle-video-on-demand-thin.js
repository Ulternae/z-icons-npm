import React from 'react';

export const LanRectangleVideoOnDemandThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 80c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h448c26.5 0 48-21.5 48-48V128c0-26.5-21.5-48-48-48zM0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm80 40v73.6c0 27.6 11 54 30.5 73.5l17.5 17.5 17.5-17.5c19.5-19.5 30.5-46 30.5-73.5V168c0-4.4 3.6-8 8-8s8 3.6 8 8v73.6c0 31.8-12.6 62.3-35.1 84.9l-23.2 23.2c-3.1 3.1-8.2 3.1-11.3 0l-23.3-23.2C76.6 304 64 273.4 64 241.6V168c0-4.4 3.6-8 8-8s8 3.6 8 8m200 8c-22.1 0-40 17.9-40 40v80c0 22.1 17.9 40 40 40h16c22.1 0 40-17.9 40-40v-80c0-22.1-17.9-40-40-40zm-56 40c0-30.9 25.1-56 56-56h16c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56h-16c-30.9 0-56-25.1-56-56zm168-56h56c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-56c-4.4 0-8-3.6-8-8V168c0-4.4 3.6-8 8-8m8 176h48c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48h-48z"})
);

export default LanRectangleVideoOnDemandThin;
