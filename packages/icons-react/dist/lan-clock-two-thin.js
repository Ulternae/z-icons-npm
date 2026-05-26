import React from 'react';

export const LanClockTwoThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-152v137.1l83.6-55.7c3.7-2.5 8.6-1.5 11.1 2.2s1.5 8.6-2.2 11.1l-96 64c-2.5 1.6-5.6 1.8-8.2.4S248 259 248 256V104c0-4.4 3.6-8 8-8s8 3.6 8 8"})
);

export default LanClockTwoThin;
