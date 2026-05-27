import React from 'react';

export const CoreGridRound = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 512a112 112 0 1 1 0-224 112 112 0 1 1 0 224m288 0a112 112 0 1 1 0-224 112 112 0 1 1 0 224M112 352a48 48 0 1 0 0 96 48 48 0 1 0 0-96m288 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96M112 224a112 112 0 1 1 0-224 112 112 0 1 1 0 224m288 0a112 112 0 1 1 0-224 112 112 0 1 1 0 224M112 64a48 48 0 1 0 0 96 48 48 0 1 0 0-96m288 0a48 48 0 1 0 0 96 48 48 0 1 0 0-96"})
);

export default CoreGridRound;
