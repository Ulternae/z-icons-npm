import React from 'react';

export const LanFileDashedLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 32H160c-17.7 0-32 14.3-32 32v176H96V64c0-35.3 28.7-64 64-64h133.5c17 0 33.3 6.7 45.3 18.7l122.5 122.6c12 12 18.7 28.3 18.7 45.3v53.5h-32v-48h-96c-35.3 0-64-28.7-64-64v-96zM96 368h32v80c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32v-80h32v80c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm338.7-208L320 45.3V128c0 17.7 14.3 32 32 32zM16 288h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16m208 0h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H224c-8.8 0-16-7.2-16-16s7.2-16 16-16m208 0h128c8.8 0 16 7.2 16 16s-7.2 16-16 16H432c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
);

export default LanFileDashedLine;
