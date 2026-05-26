import React from 'react';

export const LanDropletDegreeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512c-106 0-192-86-192-192C64 228.8 194.2 45.9 230.6-3.5c5.9-8 15.2-12.5 25.2-12.5h.4c10 0 19.3 4.5 25.2 12.5C317.8 45.9 448 228.8 448 320c0 106-86 192-192 192M528 80a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-112 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0"})
);

export default LanDropletDegreeSolid;
