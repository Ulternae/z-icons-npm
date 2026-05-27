import React from 'react';

export const CoreBlockQuote = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64V32H0v448h64zm384 64h32V64H160v64zm0 320h32v-64H160v64zm64-160v-64H160v64z"})
);

export default CoreBlockQuote;
