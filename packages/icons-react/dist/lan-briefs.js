import React from 'react';

export const LanBriefs = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 96c-8.8 0-16 7.2-16 16v32h448v-32c0-8.8-7.2-16-16-16zm272 80H192v16c0 45-14.6 88.8-41.6 124.8l-4.7 6.2c16.9 19.7 29.9 42.8 37.7 68.3 5.4 17.6 17.2 24.7 24.5 24.7h96c7.3 0 19.1-7.2 24.5-24.7 7.9-25.4 20.8-48.6 37.7-68.3l-4.7-6.2C334.6 280.8 320 237 320 192zm69.3 124.3c19.2-16 41.5-28.3 66-35.8 17.6-5.4 24.7-17.2 24.7-24.5v-64H352v16c0 38.1 12.4 75.1 35.2 105.6zM32 176v64c0 7.3 7.2 19.1 24.7 24.5 24.5 7.6 46.8 19.8 66 35.8l2.1-2.7C147.6 267.1 160 230.1 160 192v-16zM0 112c0-26.5 21.5-48 48-48h416c26.5 0 48 21.5 48 48v128c0 26.5-22 47.3-47.3 55.1-50.3 15.6-90 55.3-105.6 105.6C351.3 426 330.5 448 304 448h-96c-26.5 0-47.3-22-55.1-47.3-15.6-50.3-55.3-90-105.6-105.6C22 287.3 0 266.5 0 240z"})
);

export default LanBriefs;
