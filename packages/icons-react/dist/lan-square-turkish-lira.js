import React from 'react';

export const LanSquareTurkishLira = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm176 32c8.8 0 16 7.2 16 16v57.8l74.9-25c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2l-85.1 28.4v30.3l74.9-25c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2l-85.1 28.4V352h48c35.3 0 64-28.7 64-64 0-8.8 7.2-16 16-16s16 7.2 16 16c0 53-43 96-96 96h-64c-8.8 0-16-7.2-16-16v-57.8l-26.9 9c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2l37.1-12.4v-30.3l-26.9 9c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2l37.1-12.4V144c0-8.8 7.2-16 16-16"})
);

export default LanSquareTurkishLira;
