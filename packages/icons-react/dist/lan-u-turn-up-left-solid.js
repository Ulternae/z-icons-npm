import React from 'react';

export const LanUTurnUpLeftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 272c0-114.9-93.1-208-208-208H176V16c0-12.9-7.8-24.6-19.7-29.6s-25.7-2.2-34.9 6.9l-112 112-2.2 2.4c-10.2 12.6-9.5 31.1 2.2 42.8l112 112c9.2 9.2 22.9 11.9 34.9 6.9S176 252.9 176 240v-48h128c44.2 0 80 35.8 80 80s-35.8 80-80 80H96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h208c114.9 0 208-93.1 208-208"})
);

export default LanUTurnUpLeftSolid;
