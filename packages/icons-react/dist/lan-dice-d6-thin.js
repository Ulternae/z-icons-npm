import React from 'react';

export const LanDiceD6Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M220.1 4.1c22.5-13.2 50.3-13.2 72.8 0l168 98.5c22 12.9 35.6 36.6 35.6 62.1v181.6c0 26.2-14.2 50.4-37.2 63l-168 92.7c-21.6 11.9-47.9 11.9-69.5 0l-168-92.7c-22.9-12.7-37.2-36.8-37.2-63V164.7c0-25.5 13.5-49.2 35.6-62.1l168-98.5zM35.5 146.7c-1.9 5.7-3.1 11.8-3.1 18v181.6c0 20.4 11.1 39.2 29 49.1l168 92.7c6 3.3 12.5 5.4 19.1 6.3V260.9L35.6 146.8zm228.9 114.1v233.5c6.6-1 13.1-3 19.1-6.3l168-92.7c17.9-9.9 29-28.7 29-49.1V164.6c0-6.2-1.1-12.3-3.1-18l-213 114.1zm20.4-242.9a55.88 55.88 0 0 0-56.7 0l-168 98.5c-7 4.1-12.8 9.7-17.4 16.1L256.5 247l213.7-114.6c-4.5-6.4-10.4-12-17.4-16.1l-168-98.5z"})
);

export default LanDiceD6Thin;
