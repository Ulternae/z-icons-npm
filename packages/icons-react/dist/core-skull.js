import React from 'react';

export const CoreSkull = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M384 373.5V448h-52v-64h-56v64h-40v-64h-56v64h-52v-74.5l-64-64V256c0-106 86-192 192-192s192 86 192 192v53.5zM0 256v53.5c0 17 6.7 33.3 18.7 45.3L64 400v48c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64v-48l45.3-45.3c12-12 18.7-28.3 18.7-45.3v-53.5C512 114.6 397.4 0 256 0S0 114.6 0 256m216-16a40 40 0 1 0-80 0 40 40 0 1 0 80 0m120 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80"})
);

export default CoreSkull;
