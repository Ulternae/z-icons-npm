import React from 'react';

export const LanTableTree = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 64c17.7 0 32 14.3 32 32v64H32V96c0-17.7 14.3-32 32-32zM128 192h288v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192h64v144c0 26.5 21.5 48 48 48h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16-7.2-16-16v-50.7c5 1.8 10.4 2.7 16 2.7h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16-7.2-16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm192 240c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64c-8.8 0-16 7.2-16 16m32 96c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"})
);

export default LanTableTree;
