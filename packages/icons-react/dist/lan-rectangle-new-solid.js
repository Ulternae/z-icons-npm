import React from 'react';

export const LanRectangleNewSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M576 64c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64zm-404 96c-11 0-20 9-20 20v77.5L101.3 170c-4.5-7.8-13.8-11.6-22.5-9.3S64 171 64 180v152c0 11 9 20 20 20s20-9 20-20v-77.5l50.7 87.6c4.5 7.8 13.8 11.6 22.5 9.3S192 341 192 332V180c0-11-9-20-20-20m88 0c-11 0-20 9-20 20v152c0 11 9 20 20 20h88c11 0 20-9 20-20s-9-20-20-20h-68v-36h56c11 0 20-9 20-20s-9-20-20-20h-56v-36h68c11 0 20-9 20-20s-9-20-20-20zm296 0c-11 0-20 9-20 20v79.9c0 7.3-1.8 14.4-5.2 20.8l-4.8 8.9-12.3-23.1c-3.5-6.5-10.3-10.6-17.6-10.6-6.5 0-12.5 3.1-16.2 8.2l-1.4 2.3-12.4 23.1-4.8-8.9c-3.4-6.4-5.2-13.5-5.2-20.8v-79.9c0-11-9-20-20-20s-20 9-20 20v79.9c0 13.8 3.4 27.5 10 39.7l22.4 41.8c3.5 6.5 10.3 10.6 17.6 10.6s14.1-4.1 17.6-10.6l12.4-23.1 12.4 23.1c3.5 6.5 10.3 10.6 17.6 10.6s14.1-4.1 17.6-10.6l22.3-41.7c6.5-12.2 10-25.8 10-39.7V180c0-11-9-20-20-20"})
);

export default LanRectangleNewSolid;
