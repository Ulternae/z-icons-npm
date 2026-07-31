import React from 'react';

export const LanSquareHryvniaRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm240.8 22.7c42.1-5.3 79.2 27.5 79.2 69.9 0 6.6-.9 13.1-2.7 19.3h2.7c8.8 0 16 7.2 16 16s-7.2 16-16 16H128c-8.8 0-16-7.2-16-16s7.2-16 16-16h133c6.8-4 11-11.4 11-19.3 0-13.5-11.8-24-25.3-22.3l-75.7 9.5c-13.2 1.6-25.1-7.7-26.8-20.8s7.7-25.1 20.8-26.8zm3.8 153.3H320c8.8 0 16 7.2 16 16s-7.2 16-16 16H187.1c-6.8 4.1-11.1 11.6-11.1 19.6 0 13.6 11.9 24.3 25.4 22.8l91.9-10.2c13.2-1.5 25 8 26.5 21.2s-8 25-21.2 26.5l-91.9 10.2c-42 4.7-78.7-28.2-78.7-70.5 0-6.7 1-13.3 2.8-19.6H128c-8.8 0-16-7.2-16-16s7.2-16 16-16z"})
);

export default LanSquareHryvniaRegular;
