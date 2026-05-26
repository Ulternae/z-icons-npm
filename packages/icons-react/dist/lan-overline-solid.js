import React from 'react';

export const LanOverlineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 64h320c17.7 0 32-14.3 32-32S369.7 0 352 0H32C14.3 0 0 14.3 0 32s14.3 32 32 32m160 64a192 192 0 1 0 0 384 192 192 0 1 0 0-384m128 192a128 128 0 1 1-256 0 128 128 0 1 1 256 0"})
);

export default LanOverlineSolid;
