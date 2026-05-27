import React from 'react';

export const CorePercentSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352 480a96 96 0 1 1 0-192 96 96 0 1 1 0 192m86.6-393.4-384 384-45.2-45.2 384-384zM96 224a96 96 0 1 1 0-192 96 96 0 1 1 0 192"})
);

export default CorePercentSolid;
