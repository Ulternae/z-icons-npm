import React from 'react';

export const CoreImagesSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128 64c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H192c-35.3 0-64-28.7-64-64zm-64 96v288h384v64H64c-35.3 0-64-28.7-64-64V128h64zm216-48a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-56 208h288v-32L384 160z"})
);

export default CoreImagesSolid;
