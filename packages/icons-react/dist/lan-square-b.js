import React from 'react';

export const LanSquareB = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm160 80c0-8.8 7.2-16 16-16h56c30.9 0 56 25.1 56 56 0 12.1-3.8 23.3-10.4 32.5C293.4 258.4 304 276 304 296c0 30.9-25.1 56-56 56h-72c-8.8 0-16-7.2-16-16zm96 40c0-13.3-10.7-24-24-24h-40v48h40c13.3 0 24-10.7 24-24m-64 104h56c13.3 0 24-10.7 24-24s-10.7-24-24-24h-56z"})
);

export default LanSquareB;
