import React from 'react';

export const LanSquareUpLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 88v128c0 3.2 1.9 6.2 4.9 7.4s6.4.6 8.7-1.7l40.7-40.7c3.1-3.1 8.2-3.1 11.3 0l72.7 72.7c3.1 3.1 8.2 3.1 11.3 0l24-24c3.1-3.1 3.1-8.2 0-11.3L245 241.7c-3.1-3.1-3.1-8.2 0-11.3l40.7-40.7c2.3-2.3 3-5.7 1.7-8.7s-4.2-4.9-7.4-4.9H152c-4.4 0-8 3.6-8 8zm8-24h128c9.7 0 18.5 5.8 22.2 14.8s1.7 19.3-5.2 26.2l-35 35 67 67c9.4 9.4 9.4 24.6 0 33.9l-24 24c-9.4 9.4-24.6 9.4-33.9 0l-67-67-35 35c-6.9 6.9-17.2 8.9-26.2 5.2S128 321.7 128 312V184c0-13.3 10.7-24 24-24"})
);

export default LanSquareUpLeftThin;
