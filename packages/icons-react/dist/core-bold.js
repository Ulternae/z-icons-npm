import React from 'react';

export const CoreBold = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 160c0-35.3-28.7-64-64-64h-96v128h96c35.3 0 64-28.7 64-64M64 288V96H0V32h224c70.7 0 128 57.3 128 128 0 31.3-11.3 60.1-30 82.3 37.1 22.4 62 63.1 62 109.7 0 70.7-57.3 128-128 128H0v-64h64zm64 128h128c35.3 0 64-28.7 64-64s-28.7-64-64-64H128z"})
);

export default CoreBold;
