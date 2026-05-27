import React from 'react';

export const CorePercent = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 480a96 96 0 1 1 0-192 96 96 0 1 1 0 192m86.6-393.4-384 384-45.2-45.2 384-384zM352 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64M96 224a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0-128a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default CorePercent;
