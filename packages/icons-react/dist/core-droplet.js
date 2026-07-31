import React from 'react';

export const CoreDroplet = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m192 106.7 102.4 136.5C311 265.4 320 292.3 320 320c0 70.7-57.3 128-128 128S64 390.7 64 320c0-27.7 9-54.6 25.6-76.8zm-40-53.4L38.4 204.8A192.2 192.2 0 0 0 0 320c0 106 86 192 192 192s192-86 192-192c0-41.5-13.5-82-38.4-115.2C257.6 87.5 206.4 19.2 192 0z"})
);

export default CoreDroplet;
