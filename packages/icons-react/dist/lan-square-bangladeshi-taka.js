import React from 'react';

export const LanSquareBangladeshiTaka = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm112.2 45.4c1.5-8.7 9.7-14.6 18.4-13.2l17.4 2.9c25.3 4.2 43.9 26.2 43.9 51.9v25h16c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v91.4c0 11.4 9.2 20.6 20.6 20.6h11.4c44.2 0 80-35.8 80-80v-11.4c0-11.4-9.2-20.6-20.6-20.6h-3.4c-8.8 0-16-7.2-16-16s7.2-16 16-16h3.4c29 0 52.6 23.5 52.6 52.6V272c0 61.9-50.1 112-112 112h-11.4c-29 0-52.6-23.5-52.6-52.6V240h-29.7c-8.8 0-16-7.2-16-16s7.2-16 16-16h29.7v-25c0-10.1-7.3-18.6-17.2-20.3l-17.4-2.9c-8.7-1.5-14.6-9.7-13.2-18.4z"})
);

export default LanSquareBangladeshiTaka;
