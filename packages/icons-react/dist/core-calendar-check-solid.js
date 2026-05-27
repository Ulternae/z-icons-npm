import React from 'react';

export const CoreCalendarCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M160 32h128v-64h64v64h32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h32v-64h64zm32 254.1-64-64L94.1 256l81 81c9.4 9.4 24.6 9.4 33.9 0l145-145-33.9-33.9-128 128z"})
);

export default CoreCalendarCheckSolid;
