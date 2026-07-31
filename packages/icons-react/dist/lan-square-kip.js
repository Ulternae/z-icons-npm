import React from 'react';

export const LanSquareKip = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm316.3 37.8c5.7 6.8 4.7 16.9-2.1 22.5l-100.8 83.9h90.3c8.8 0 16 7.2 16 16s-7.2 16-16 16h-90.2l100.6 83.5c6.8 5.6 7.7 15.7 2.1 22.5s-15.7 7.7-22.5 2.1L192 295.9V368c0 8.8-7.2 16-16 16s-16-7.2-16-16v-95.8h-31.8c-8.8 0-16-7.2-16-16s7.2-16 16-16H160V144c0-8.8 7.2-16 16-16s16 7.2 16 16v72.5l101.8-84.8c6.8-5.7 16.9-4.7 22.5 2.1"})
);

export default LanSquareKip;
