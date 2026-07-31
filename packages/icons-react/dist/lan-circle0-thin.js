import React from 'react';

export const LanCircle0Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-352c-44.2 0-80 35.8-80 80v32c0 44.2 35.8 80 80 80s80-35.8 80-80v-32c0-44.2-35.8-80-80-80m-64 80c0-35.3 28.7-64 64-64s64 28.7 64 64v32c0 35.3-28.7 64-64 64s-64-28.7-64-64z"})
);

export default LanCircle0Thin;
