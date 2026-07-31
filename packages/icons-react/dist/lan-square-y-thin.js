import React from 'react';

export const LanSquareYThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm142.1 66.8 81.9 96.8 81.9-96.8c2.9-3.4 7.9-3.8 11.3-.9s3.8 7.9.9 11.3L232 274.9V344c0 4.4-3.6 8-8 8s-8-3.6-8-8v-69.1l-86.1-101.8c-2.9-3.4-2.4-8.4.9-11.3s8.4-2.4 11.3.9z"})
);

export default LanSquareYThin;
