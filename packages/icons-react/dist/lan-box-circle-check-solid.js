import React from 'react';

export const LanBoxCircleCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m401.4 128-34.3-48H145l-34.3 48zM32 148.5c0-13.3 4.2-26.3 11.9-37.2l49-68.5c12-16.8 31.4-26.8 52-26.8H367c20.7 0 40.1 10 52.1 26.8l48.9 68.5c7.8 10.9 11.9 23.9 11.9 37.2V214c-15.3-3.9-31.4-6-48-6-106 0-192 86-192 192 0 28.6 6.2 55.6 17.4 80H96c-35.3 0-64-28.7-64-64zM288 400a144 144 0 1 1 288 0 144 144 0 1 1-288 0m201.4-60.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.3"})
);

export default LanBoxCircleCheckSolid;
