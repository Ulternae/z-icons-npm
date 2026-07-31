import React from 'react';

export const NeoHeartHalfSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 560 560',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M154 28c-44.5 0-83.6 14.3-111.7 42.3S0 137.5 0 182c0 93 51.8 173.6 104 231.7 52.7 58.6 109.6 98.4 127.3 110.2 8.3 5.5 17.7 8.1 26.9 8.1 27.5 0 49.8-22.3 49.8-49.8V182c0-44.5-14.3-83.6-42.3-111.7S198.5 28 154 28"})
);

export default NeoHeartHalfSolid;
