import React from 'react';

export const LanSquareKThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm293.3 78-75.9 67 76.9 98.1c2.7 3.5 2.1 8.5-1.4 11.2s-8.5 2.1-11.2-1.4l-76.4-97.3-45.3 40V344c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8s8 3.6 8 8v102.3L282.7 162c3.3-2.9 8.4-2.6 11.3.7s2.6 8.4-.7 11.3"})
);

export default LanSquareKThin;
