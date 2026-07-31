import React from 'react';

export const LanRectangleCodeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 80c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zM64 64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm149.7 98.3c-3.1-3.1-8.2-3.1-11.3 0l-88 88c-3.1 3.1-3.1 8.2 0 11.3l88 88c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L131.4 256l82.3-82.3c3.1-3.1 3.1-8.2 0-11.3zm84.7 11.3 82.3 82.3-82.3 82.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3z"})
);

export default LanRectangleCodeThin;
