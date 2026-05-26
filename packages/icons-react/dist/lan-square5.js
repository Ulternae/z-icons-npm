import React from 'react';

export const LanSquare5 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm272 64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v40h52c33.1 0 60 26.9 60 60s-26.9 60-60 60h-68c-8.8 0-16-7.2-16-16s7.2-16 16-16h68c15.5 0 28-12.5 28-28s-12.5-28-28-28h-68c-8.8 0-16-7.2-16-16v-72c0-8.8 7.2-16 16-16z"})
);

export default LanSquare5;
