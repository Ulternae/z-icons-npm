import React from 'react';

export const LanButter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 96h64c17.7 0 32 14.3 32 32v144h32V128c0-35.3-28.7-64-64-64H96c-35.3 0-64 28.7-64 64v144h32V128c0-17.7 14.3-32 32-32h288v176h32zM16 320c-8.8 0-16 7.2-16 16s7.2 16 16 16h16v64c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32v-64h16c8.8 0 16-7.2 16-16s-7.2-16-16-16zm496 32v64H64v-64z"})
);

export default LanButter;
