import React from 'react';

export const LanTableTreeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 48c26.5 0 48 21.5 48 48v80H16V96c0-26.5 21.5-48 48-48zM112 192h320v224c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V192h80v152c0 22.1 17.9 40 40 40h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-13.3 0-24-10.7-24-24v-64c6.7 5 15 8 24 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48c-13.3 0-24-10.7-24-24zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm192 248c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8s-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8m32 96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8s-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8"})
);

export default LanTableTreeThin;
