import React from 'react';

export const LanClockFiveThirtyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M264 408V282.4l49.3 74c2.5 3.7 7.4 4.7 11.1 2.2s4.7-7.4 2.2-11.1l-64-96c-2-2.9-5.6-4.2-9-3.2s-5.7 4.1-5.7 7.7v152c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
);

export default LanClockFiveThirtyThin;
