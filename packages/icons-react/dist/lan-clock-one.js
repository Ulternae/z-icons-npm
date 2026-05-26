import React from 'react';

export const LanClockOne = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m272-144v91.2l34.7-52c4.9-7.4 14.8-9.3 22.2-4.4s9.3 14.8 4.4 22.2l-64 96c-3.9 5.9-11.2 8.5-17.9 6.4S240 263 240 256V112c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanClockOne;
