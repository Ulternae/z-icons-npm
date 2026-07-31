import React from 'react';

export const LanCircleXSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-53.4-359.2 53.4 65.3 53.4-65.3c8.4-10.3 23.5-11.8 33.8-3.4s11.8 23.5 3.4 33.8L287 256l59.6 72.8c8.4 10.3 6.9 25.4-3.4 33.8s-25.4 6.9-33.8-3.4L256 293.9l-53.4 65.3c-8.4 10.3-23.5 11.8-33.8 3.4s-11.8-23.5-3.4-33.8L225 256l-59.6-72.8c-8.4-10.3-6.9-25.4 3.4-33.8s25.4-6.9 33.8 3.4"})
);

export default LanCircleXSolid;
