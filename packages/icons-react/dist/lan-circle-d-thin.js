import React from 'react';

export const LanCircleDThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-352c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h72c53 0 96-43 96-96s-43-96-96-96zm72 176h-64V176h64c44.2 0 80 35.8 80 80s-35.8 80-80 80"})
);

export default LanCircleDThin;
