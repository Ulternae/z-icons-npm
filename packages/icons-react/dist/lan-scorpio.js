import React from 'react';

export const LanScorpio = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 32c53 0 96 43 96 96v321.6c0 16.8 13.6 30.4 30.4 30.4 8.1 0 15.9-3.3 21.7-9.1l85.6-86.9H560c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-25.1l-85.2 86.5C511.1 505.3 495 512 478.3 512c-34.4 0-62.4-27.9-62.4-62.4L416 128c0-35.3-28.7-64-64-64s-64 28.7-64 64v336c0 8.8-7.2 16-16 16s-16-7.2-16-16V128c0-35.3-28.7-64-64-64s-64 28.7-64 64v336c0 8.8-7.2 16-16 16s-16-7.2-16-16V112c0-26.5-21.5-48-48-48-8.8 0-16-7.2-16-16s7.2-16 16-16c28.6 0 53.7 15.1 67.8 37.7C133.3 46.8 160.9 32 192 32c33.4 0 62.8 17.1 80 43 17.2-25.9 46.6-43 80-43"})
);

export default LanScorpio;
