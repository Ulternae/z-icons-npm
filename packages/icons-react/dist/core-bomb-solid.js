import React from 'react';

export const CoreBombSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M299.5 64.3c22.1 1.1 43.3 5.4 63.3 12.5 24.1-12.3 54.3-8.4 74.4 11.7l50.8 50.7c20.3 20.3 24.1 50.7 11.5 74.8 8.1 23.2 12.5 48 12.5 73.9 0 119.8-94.1 217.7-212.5 223.7l-11.5.4c-119.8 0-217.7-94.1-223.7-212.5L64 288C64 164.3 164.3 64 288 64zM288 136c-83.9 0-152 68.1-152 152h48c0-57.4 46.6-104 104-104zM572 4h68v56h-68v68h-56V60h-68V4h68v-68h56z"})
);

export default CoreBombSolid;
