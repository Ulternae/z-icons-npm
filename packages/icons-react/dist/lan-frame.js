import React from 'react';

export const LanFrame = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 80c0-8.8-7.2-16-16-16h-48V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H96V16c0-8.8-7.2-16-16-16S64 7.2 64 16v48H16C7.2 64 0 71.2 0 80s7.2 16 16 16h48v320H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h320v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48V96h48c8.8 0 16-7.2 16-16m-96 16v320H96V96z"})
);

export default LanFrame;
