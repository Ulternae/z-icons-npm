import React from 'react';

export const Lan8Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M296 148c0-64.1-51.9-116-116-116h-40C75.9 32 24 83.9 24 148c0 45.2 25.9 84.4 63.6 103.5C37.3 264.2 0 309.7 0 364c0 64.1 51.9 116 116 116h88c64.1 0 116-51.9 116-116 0-54.3-37.3-99.8-87.6-112.5C270.1 232.4 296 193.2 296 148M180.1 264H204c55.2 0 100 44.8 100 100s-44.8 100-100 100h-88c-55.2 0-100-44.8-100-100s44.8-100 100-100zm0-16H140c-55.3 0-100-44.8-100-100S84.8 48 140 48h40c55.2 0 100 44.8 100 100s-44.7 100-99.9 100"})
);

export default Lan8Thin;
