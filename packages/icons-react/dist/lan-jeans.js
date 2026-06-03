import React from 'react';

export const LanJeans = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 536.622',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M88.2 45.4C93.3 19.1 116.3 0 143.2 0h226.1c26.9 0 49.9 19.1 55 45.4L503 454.6c5.8 30.4-14 59.7-44.4 65.6l-80 15.4c-29.6 5.7-58.3-13-65.1-42.3l-57.2-246.4-57.2 246.4c-6.8 29.3-35.6 48-65.1 42.3l-80-15.4C23.6 514.3 3.7 485 9.5 454.6zm55-13.4c-11.5 0-21.4 8.2-23.6 19.5L117.2 64h278l-2.4-12.5c-2.1-11.3-12-19.5-23.5-19.5zm177 64h-48v78.2L344.5 486c2.9 12.6 15.2 20.6 27.9 18.1l80-15.4c13-2.5 21.5-15.1 19-28.1L419.7 192h-3.6c-53 0-96-43-96-96zm32 0c0 34.5 27.3 62.6 61.5 64l-12.3-64zm-112 0h-48c0 53-43 96-96 96h-3.6L40.9 460.6c-2.5 13 6 25.6 19 28.1l80 15.4c12.7 2.4 25-5.6 27.9-18.1l72.3-311.8V96zm-129.1 0-12.3 64c34.2-1.3 61.5-29.5 61.5-64z"})
);

export default LanJeans;
