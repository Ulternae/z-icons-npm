import React from 'react';

export const LanClapperboardPlayRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M480 64c6.7 0 13.1 1 19.1 2.9L384 182c-10 2.6-19.6 5.9-28.9 10h-73.2l127-127 1-1zM96 400h146.7c2.8 16.8 7.8 32.9 14.8 48H96c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h86.1L80 166.1V384c0 8.8 7.2 16 16 16m360.4-222.5 79.9-79.9c4.9 9 7.7 19.4 7.7 30.4v84c-25.3-18.2-55.2-30.4-87.6-34.5M214.1 192H122L249 65l1-1h92.1l-127 127zM432 224a144 144 0 1 1 0 288 144 144 0 1 1 0-288m-23.8 82.3c-4.9-3-11.1-3-16.1-.2s-8.1 8.1-8.1 13.9v96c0 5.8 3.1 11.1 8.1 13.9s11.2 2.8 16.1-.2l80-48c4.8-2.9 7.8-8.1 7.8-13.7s-2.9-10.8-7.8-13.7z"})
);

export default LanClapperboardPlayRegular;
