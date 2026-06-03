import React from 'react';

export const LanPaintRoller = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 32c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v64c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64v-16h16c17.7 0 32 14.3 32 32v80c0 17.7-14.3 32-32 32H272c-35.3 0-64 28.7-64 64-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48 0-17.7 14.3-32 32-32h160c35.3 0 64-28.7 64-64v-80c0-35.3-28.7-64-64-64h-16V64c0-35.3-28.7-64-64-64zm176 352c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V368c0-8.8 7.2-16 16-16z"})
);

export default LanPaintRoller;
