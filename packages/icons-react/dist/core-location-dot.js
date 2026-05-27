import React from 'react';

export const CoreLocationDot = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M38.4 307.2A192.2 192.2 0 0 1 0 192C0 86 86 0 192 0s192 86 192 192c0 38.9-11.9 76.9-33.9 108.9l-4.5 6.3L192 512zm256-38.4C311 246.7 320 219.7 320 192c0-70.7-57.3-128-128-128S64 121.3 64 192c0 24.2 6.9 47.9 19.7 68.3l5.9 8.5L192 405.4zM192 152a40 40 0 1 1 0 80 40 40 0 1 1 0-80"})
);

export default CoreLocationDot;
