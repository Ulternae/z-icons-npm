import React from 'react';

export const NeoArrowRotateLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M476 280c0-62.4-19.7-110.8-52.5-143.5S342.4 84 280 84c-45.8 0-84 10.6-113.9 29.1 22.9 25 41.5 50.6 49.1 61.4 5.9 8.4 8.8 18.2 8.8 28 0 27.3-22.1 49.5-49.5 49.5H56c-30.9 0-56-25.1-56-56V77.5C0 50.2 22.1 28 49.5 28c9.8 0 19.6 2.9 28 8.8 8.8 6.2 27.2 19.6 47.2 36.6C166.7 43.5 219.8 28 280 28c74.5 0 138.1 23.8 183.1 68.9S532 205.5 532 280s-23.8 138.1-68.9 183.1S354.5 532 280 532c-103.2 0-184.7-45.9-225-127.6-6.8-13.9-1.1-30.7 12.7-37.5s30.7-1.1 37.5 12.7C134.5 439.1 194.4 476 280 476c62.4 0 110.8-19.7 143.5-52.5S476 342.4 476 280"})
);

export default NeoArrowRotateLeftSolid;
