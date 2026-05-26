import React from 'react';

export const LanCircleD = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-352c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h64c53 0 96-43 96-96s-43-96-96-96zm64 160h-48V192h48c35.3 0 64 28.7 64 64s-28.7 64-64 64"})
);

export default LanCircleD;
