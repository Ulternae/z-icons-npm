import React from 'react';

export const LanRectangleHistoryCircleUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M242.7 432H64c-8.8 0-16-7.2-16-16V272c0-8.8 7.2-16 16-16h241c33.8-29.9 78.3-48 127-48H64c-35.3 0-64 28.7-64 64v144c0 35.3 28.7 64 64 64h193.4c-6.9-15.1-11.9-31.2-14.8-48zM464 128c0-13.3-10.7-24-24-24H72c-13.3 0-24 10.7-24 24s10.7 24 24 24h368c13.3 0 24-10.7 24-24M416 24c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24m160 376a144 144 0 1 0-288 0 144 144 0 1 0 288 0m-66.3 80.7C489.5 500.1 462.2 512 432 512s-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7h65.2c21 0 38.9 13.7 45.1 32.7M384 368a48 48 0 1 1 96 0 48 48 0 1 1-96 0"})
);

export default LanRectangleHistoryCircleUserRegular;
