import React from 'react';

export const LanSquareCode = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v320c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm196.7 132.7c-6.2 6.2-6.2 16.4 0 22.6l68.7 68.7-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l80-80c6.2-6.2 6.2-16.4 0-22.6l-80-80c-6.2-6.2-16.4-6.2-22.6 0m-73.4 22.6c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0l-80 80c-6.2 6.2-6.2 16.4 0 22.6l80 80c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L118.6 256z"})
);

export default LanSquareCode;
