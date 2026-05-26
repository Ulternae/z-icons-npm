import React from 'react';

export const LanClockEightThirtyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 256a240 240 0 1 0 480 0 240 240 0 1 0-480 0m496 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M248 408V270.9l-83.6 55.7c-3.7 2.5-8.6 1.5-11.1-2.2s-1.5-8.6 2.2-11.1l96-64c2.5-1.6 5.6-1.8 8.2-.4s4.3 4.1 4.3 7.1v152c0 4.4-3.6 8-8 8s-8-3.6-8-8"})
);

export default LanClockEightThirtyThin;
