import React from 'react';

export const LanClockElevenThirtySolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-24 392V263.3l-60-90c-7.4-11-4.4-25.9 6.7-33.3s25.9-4.4 33.3 6.7l64 96c2.6 3.9 4 8.6 4 13.3v136c0 13.3-10.7 24-24 24s-24-10.7-24-24"})
);

export default LanClockElevenThirtySolid;
