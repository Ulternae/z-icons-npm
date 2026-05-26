import React from 'react';

export const LanGenderlessSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 128a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 320a192 192 0 1 0 0-384 192 192 0 1 0 0 384"})
);

export default LanGenderlessSolid;
