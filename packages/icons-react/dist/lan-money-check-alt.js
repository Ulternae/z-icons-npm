import React from 'react';

export const LanMoneyCheckAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm304 160h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16m-16-80c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16m-128-56c8.8 0 16 7.2 16 16v8h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-49.7c-7.9 0-14.3 6.4-14.3 14.3 0 7 5.1 13 12 14.1l45.3 7.6c22.3 3.7 38.7 23 38.7 45.7 0 25.6-20.7 46.3-46.3 46.3H176v8c0 8.8-7.2 16-16 16s-16-7.2-16-16v-8h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h57.7c7.9 0 14.3-6.4 14.3-14.3 0-7-5.1-13-12-14.1l-45.3-7.6c-22.3-3.7-38.7-23-38.7-45.7 0-25.6 20.7-46.3 46.3-46.3h1.7v-8c0-8.8 7.2-16 16-16"})
);

export default LanMoneyCheckAlt;
