import React from 'react';

export const LanClonePlus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 480h224c17.7 0 32-14.3 32-32v-48h32v48c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h48v32H64c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32m416-192V64c0-17.7-14.3-32-32-32H224c-17.7 0-32 14.3-32 32v224c0 17.7 14.3 32 32 32h224c17.7 0 32-14.3 32-32m-256 64c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64zm96-104v-56h-56c-8.8 0-16-7.2-16-16s7.2-16 16-16h56v-56c0-8.8 7.2-16 16-16s16 7.2 16 16v56h56c8.8 0 16 7.2 16 16s-7.2 16-16 16h-56v56c0 8.8-7.2 16-16 16s-16-7.2-16-16"})
);

export default LanClonePlus;
