import React from 'react';

export const LanSquareQThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm136 160c0 48.6 39.4 88 88 88 21.4 0 41.1-7.7 56.3-20.4l-36.5-36.5c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l36.5 36.5C304.3 297 312 277.4 312 256c0-48.6-39.4-88-88-88s-88 39.4-88 88m192 0c0 25.8-9.4 49.5-25 67.7l22.7 22.7c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L291.7 335c-18.2 15.6-41.8 25-67.7 25-57.4 0-104-46.6-104-104s46.6-104 104-104 104 46.6 104 104"})
);

export default LanSquareQThin;
