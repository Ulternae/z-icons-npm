import React from 'react';

export const CoreLocationDotSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 0c106 0 192 86 192 192 0 41.5-13.5 82-38.4 115.2L192 512 38.4 307.2A192.2 192.2 0 0 1 0 192C0 86 86 0 192 0m0 136a56 56 0 1 0 0 112 56 56 0 1 0 0-112"})
);

export default CoreLocationDotSolid;
