import React from 'react';

export const CoreArrowUpWideShortSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M182.9 41.4c-12.5-12.5-32.8-12.5-45.3 0L19 160l45.3 45.3 64-64V480h64V141.3l64 64 45.2-45.3zM576.3 128h32V64h-288v64zm-96 320v-64h-160v64zm32-160h32v-64h-224v64z"})
);

export default CoreArrowUpWideShortSolid;
