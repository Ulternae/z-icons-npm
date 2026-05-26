import React from 'react';

export const LanSquareDownRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 464c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48zm64-48c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64zm-144-88V200c0-3.2-1.9-6.2-4.9-7.4s-6.4-.6-8.7 1.7L249.7 235c-3.1 3.1-8.2 3.1-11.3 0l-72.7-72.7c-3.1-3.1-8.2-3.1-11.3 0l-24 24c-3.1 3.1-3.1 8.2 0 11.3l72.6 72.7c3.1 3.1 3.1 8.2 0 11.3l-40.7 40.7c-2.3 2.3-3 5.7-1.7 8.7s4.2 4.9 7.4 4.9h128c4.4 0 8-3.6 8-8zm-8 24H168c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l35-35-67-67c-9.4-9.4-9.4-24.6 0-33.9l24-24c9.4-9.4 24.6-9.4 33.9 0l67 67 35-35c6.9-6.9 17.2-8.9 26.2-5.2S320 190.3 320 200v128c0 13.3-10.7 24-24 24"})
);

export default LanSquareDownRightThin;
