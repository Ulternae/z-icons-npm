import React from 'react';

export const LanAlien8bitSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v16h48c8.8 0 16 7.2 16 16v48h128V80c0-8.8 7.2-16 16-16h48V48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-48v64h48c8.8 0 16 7.2 16 16v48h32v-80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16h-48v80c0 8.8-7.2 16-16 16h-48v80c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-32c0-8.8 7.2-16 16-16h48v-32H192v32h48c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-80H80c-8.8 0-16-7.2-16-16v-80H16c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v80h32v-48c0-8.8 7.2-16 16-16h48V96h-48c-8.8 0-16-7.2-16-16zm64 192v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m192 0v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16"})
);

export default LanAlien8bitSolid;
