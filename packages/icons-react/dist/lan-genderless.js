import React from 'react';

export const LanGenderless = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 96a160 160 0 1 1 0 320 160 160 0 1 1 0-320m0 352a192 192 0 1 0 0-384 192 192 0 1 0 0 384"})
);

export default LanGenderless;
