import React from 'react';

export const LanSquare9 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm184 240c0-8.8 7.2-16 16-16h32c17.7 0 32-14.3 32-32v-8.6c-9.4 5.4-20.3 8.6-32 8.6h-16c-35.3 0-64-28.7-64-64s28.7-64 64-64h16c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-32c-8.8 0-16-7.2-16-16m48-144h-16c-17.7 0-32 14.3-32 32s14.3 32 32 32h16c17.7 0 32-14.3 32-32s-14.3-32-32-32"})
);

export default LanSquare9;
