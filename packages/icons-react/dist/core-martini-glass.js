import React from 'react';

export const CoreMartiniGlass = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M2.9 50.8C8.1 39.3 19.4 32 32 32h448c12.6 0 24 7.3 29.1 18.8s3.2 24.8-5.1 34.3l-216.1 247v116h96v64h-256v-64h96v-116L7.8 85.1C-.3 75.6-2.3 62.2 2.9 50.8M256 271.4 409.5 96h-307z"})
);

export default CoreMartiniGlass;
