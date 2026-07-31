import React from 'react';

export const LanGenderlessThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 80a176 176 0 1 1 0 352 176 176 0 1 1 0-352m0 368a192 192 0 1 0 0-384 192 192 0 1 0 0 384"})
);

export default LanGenderlessThin;
