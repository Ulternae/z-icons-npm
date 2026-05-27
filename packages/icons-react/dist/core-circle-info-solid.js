import React from 'react';

export const CoreCircleInfoSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m-56-280v48h32v56h-32v48h112v-48h-32V232zm56-112a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
);

export default CoreCircleInfoSolid;
