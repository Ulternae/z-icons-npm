import React from 'react';

export const LanCircleF = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-352c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16s16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64v-48h80c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
);

export default LanCircleF;
