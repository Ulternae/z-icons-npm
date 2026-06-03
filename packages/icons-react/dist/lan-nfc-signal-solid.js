import React from 'react';

export const LanNfcSignalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v153c-22.6 5.9-44 14.6-64 25.6V136c0-22.1-17.9-40-40-40H272c-22.1 0-40 17.9-40 40v78.4c-14.3 8.3-24 23.8-24 41.6 0 26.5 21.5 48 48 48s48-21.5 48-48c0-17.8-9.7-33.3-24-41.6V144h88v164.2c-20 17.3-37.4 37.5-51.8 59.8H144V144h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32c-22.1 0-40 17.9-40 40v240c0 22.1 17.9 40 40 40h155.5c-8 20.3-13.8 41.7-16.9 64H96c-35.3 0-64-28.7-64-64zm520 192c13.3 0 24 10.7 24 24s-10.7 24-24 24c-101.6 0-184 82.4-184 184 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-128.1 103.9-232 232-232m-8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m32-72c0 13.3-10.7 24-24 24-48.6 0-88 39.4-88 88 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-75.1 60.9-136 136-136 13.3 0 24 10.7 24 24"})
);

export default LanNfcSignalSolid;
