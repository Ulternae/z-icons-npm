import React from 'react';

export const CoreCircleQuestionSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-184a40 40 0 1 0 0 80 40 40 0 1 0 0-80m0-208c-48.6 0-88 39.4-88 88h48c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40h-32v48h32c48.6 0 88-39.4 88-88s-39.4-88-88-88"})
);

export default CoreCircleQuestionSolid;
