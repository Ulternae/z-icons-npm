import React from 'react';

export const CoreBusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 0c70.7 0 128 57.3 128 128v384h-64v-64H160v64H96V128C96 57.3 153.3 0 224 0zM208 296a40 40 0 1 0 0 80 40 40 0 1 0 0-80m224 0a40 40 0 1 0 0 80 40 40 0 1 0 0-80m-368-8H0V160h64zm576 0h-64V160h64zM224 64c-35.3 0-64 28.7-64 64v64h320v-64c0-35.3-28.7-64-64-64z"})
);

export default CoreBusSolid;
