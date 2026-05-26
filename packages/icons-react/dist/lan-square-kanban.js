import React from 'react';

export const LanSquareKanban = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 96v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm128 192c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16m176 48V144c0-8.8 7.2-16 16-16s16 7.2 16 16v192c0 8.8-7.2 16-16 16s-16-7.2-16-16m-80-80c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16s16 7.2 16 16v96c0 8.8-7.2 16-16 16"})
);

export default LanSquareKanban;
