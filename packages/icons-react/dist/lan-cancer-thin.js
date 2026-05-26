import React from 'react';

export const LanCancerThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M408 152c57.4 0 104 46.6 104 104 0 1.5 0 3-.1 4.5C509.5 399.8 395.9 512 256 512c-54.4 0-104.8-17-146.3-45.9-3.6-2.5-4.5-7.5-2-11.2s7.5-4.5 11.2-2c38.9 27.1 86.1 43 137.1 43 108.7 0 200.4-72.3 230-171.4-19.1 21.6-46.9 35.4-78 35.4-57.4 0-104-46.6-104-104s46.6-104 104-104zM256 0c54.4 0 104.8 17 146.3 45.9 3.6 2.5 4.5 7.5 2 11.2s-7.5 4.5-11.2 2C354.3 31.9 307 16 256 16 147.3 16 55.5 88.3 26 187.3c19.1-21.6 46.9-35.3 78-35.3 57.4 0 104 46.6 104 104s-46.6 104-104 104S0 313.4 0 256c0-1.9.1-3.8.2-5.7C3.2 111.6 116.5 0 256 0M104 168a88 88 0 1 0 0 176 88 88 0 1 0 0-176m304 0a88 88 0 1 0 0 176 88 88 0 1 0 0-176"})
);

export default LanCancerThin;
