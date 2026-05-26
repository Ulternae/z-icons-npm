import React from 'react';

export const LanClockElevenThirty = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 256a224 224 0 1 0 448 0 224 224 0 1 0-448 0m480 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M240 400V260.8l-61.3-92c-4.9-7.4-2.9-17.3 4.4-22.2s17.3-2.9 22.2 4.4l64 96c1.8 2.6 2.7 5.7 2.7 8.9v144c0 8.8-7.2 16-16 16s-16-7.2-16-16z"})
);

export default LanClockElevenThirty;
