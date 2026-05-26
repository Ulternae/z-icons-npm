import React from 'react';

export const LanClockThreeThirtyThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M16 256a240 240 0 1 0 480 0 240 240 0 1 0-480 0m496 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M248 408V256c0-4.4 3.6-8 8-8h120c4.4 0 8 3.6 8 8s-3.6 8-8 8H264v144c0 4.4-3.6 8-8 8s-8-3.6-8-8"})
);

export default LanClockThreeThirtyThin;
