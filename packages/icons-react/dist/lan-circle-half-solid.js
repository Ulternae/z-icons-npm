import React from 'react';

export const LanCircleHalfSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32c0-17.7-14.4-32.2-31.9-30C97.8 17.7 0 125.4 0 256s97.8 238.3 224.1 254c17.5 2.2 31.9-12.4 31.9-30z"})
);

export default LanCircleHalfSolid;
