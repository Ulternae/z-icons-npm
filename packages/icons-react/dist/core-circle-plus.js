import React from 'react';

export const CoreCirclePlus = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m28 164h68v56h-68v68h-56v-68h-68v-56h68v-68h56z"})
);

export default CoreCirclePlus;
