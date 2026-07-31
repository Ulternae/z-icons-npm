import React from 'react';

export const LanBookBookmark = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h336c26.5 0 48 21.5 48 48v320c0 20.9-13.4 38.7-32 45.3V480h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64zm320-32h-96v144l38.4-28.8a15.9 15.9 0 0 1 19.2 0L320 176zm-128 0H64c-17.7 0-32 14.3-32 32v328.6c9.4-5.4 20.3-8.6 32-8.6h336c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16h-48v176c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L272 180l-54.4 40.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h320v-64z"})
);

export default LanBookBookmark;
