import React from 'react';

export const LanSquareDownRight = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 448c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32zm64-32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zM288 219.3 263.3 244c-3 3-7.1 4.7-11.3 4.7s-8.3-1.7-11.3-4.7L176 179.3 147.3 208l64.7 64.7c6.2 6.2 6.2 16.4 0 22.6L187.3 320H288zm8 132.7H168c-21.2 0-32-26-17-41l27-27-59-59c-9.4-9.4-9.4-24.6 0-33.9l40-40c9.4-9.4 24.6-9.4 33.9 0l59 59 27-27c15-15 41-4.3 41 17v128c0 13.3-10.7 24-24 24z"})
);

export default LanSquareDownRight;
