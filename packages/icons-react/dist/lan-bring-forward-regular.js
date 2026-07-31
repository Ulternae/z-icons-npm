import React from 'react';

export const LanBringForwardRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M224 464h224c8.8 0 16-7.2 16-16V224c0-8.8-7.2-16-16-16h-48v-48h48c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64H224c-35.3 0-64-28.7-64-64v-48h48v48c0 8.8 7.2 16 16 16m64-112H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h224c35.3 0 64 28.7 64 64v224c0 35.3-28.7 64-64 64"})
);

export default LanBringForwardRegular;
