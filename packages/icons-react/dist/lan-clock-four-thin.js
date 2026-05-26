import React from 'react';

export const LanClockFourThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M496 256a240 240 0 1 1-480 0 240 240 0 1 1 480 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m248-152v152c0 2.7 1.3 5.2 3.6 6.7l96 64c3.7 2.5 8.6 1.5 11.1-2.2s1.5-8.6-2.2-11.1L264 251.7V104c0-4.4-3.6-8-8-8s-8 3.6-8 8"})
);

export default LanClockFourThin;
