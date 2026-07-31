import React from 'react';

export const LanCircleU = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-48-336c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 44.2 35.8 80 80 80s80-35.8 80-80v-96c0-8.8-7.2-16-16-16s-16 7.2-16 16v96c0 26.5-21.5 48-48 48s-48-21.5-48-48z"})
);

export default LanCircleU;
