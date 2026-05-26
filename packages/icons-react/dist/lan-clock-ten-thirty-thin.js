import React from 'react';

export const LanClockTenThirtyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M264 408V256c0-2.7-1.3-5.2-3.6-6.7l-96-64c-3.7-2.5-8.6-1.5-11.1 2.2s-1.5 8.6 2.2 11.1l92.5 61.7V408c0 4.4 3.6 8 8 8s8-3.6 8-8"})
);

export default LanClockTenThirtyThin;
