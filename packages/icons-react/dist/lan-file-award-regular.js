import React from 'react';

export const LanFileAwardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 48h112v88c0 39.8 32.2 72 72 72h88v240c0 8.8-7.2 16-16 16H256v48h192c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L370.7 18.7C358.7 6.7 342.5 0 325.5 0H192c-35.3 0-64 28.7-64 64v80c16.6 0 32.7 2.3 48 6.6V64c0-8.8 7.2-16 16-16m160 19.9 92.1 92.1H376c-13.3 0-24-10.7-24-24zM256 320c0-70.7-57.3-128-128-128S0 249.3 0 320c0 40.4 18.7 76.5 48 99.9V525c0 10.5 8.5 19 19 19 3.3 0 6.5-.9 9.4-2.5L128 512l51.6 29.5c2.9 1.6 6.1 2.5 9.4 2.5 10.5 0 19-8.5 19-19V419.9c29.3-23.5 48-59.5 48-99.9m-128-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanFileAwardRegular;
