import React from 'react';

export const LanClone = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M288 480H64c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32h48v-32H64c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64v-48h-32v48c0 17.7-14.3 32-32 32m-64-160c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32h224c17.7 0 32 14.3 32 32v224c0 17.7-14.3 32-32 32zm-64-32c0 35.3 28.7 64 64 64h224c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64z"})
);

export default LanClone;
