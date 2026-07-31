import React from 'react';

export const LanCircleX = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-51.5-346c-5.5-6.9-15.6-8-22.5-2.5s-8 15.6-2.5 22.5l56 70-56 70c-5.5 6.9-4.4 17 2.5 22.5s17 4.4 22.5-2.5l51.5-64.4 51.5 64.4c5.5 6.9 15.6 8 22.5 2.5s8-15.6 2.5-22.5l-56-70 56-70c5.5-6.9 4.4-17-2.5-22.5s-17-4.4-22.5 2.5L256 230.4z"})
);

export default LanCircleX;
