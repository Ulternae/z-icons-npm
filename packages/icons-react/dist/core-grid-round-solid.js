import React from 'react';

export const CoreGridRoundSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 512a112 112 0 1 1 0-224 112 112 0 1 1 0 224m288 0a112 112 0 1 1 0-224 112 112 0 1 1 0 224M112 224a112 112 0 1 1 0-224 112 112 0 1 1 0 224m288 0a112 112 0 1 1 0-224 112 112 0 1 1 0 224"})
);

export default CoreGridRoundSolid;
