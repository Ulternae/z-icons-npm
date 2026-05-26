import React from 'react';

export const LanMoonWaxingGibbousInverseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m0 64c13.2 0 26 1.3 38.5 3.8C232.8 107.7 192 177.1 192 256s40.8 148.2 102.5 188.1c-12.4 2.5-25.3 3.9-38.5 3.9-106 0-192-86-192-192S150 64 256 64"})
);

export default LanMoonWaxingGibbousInverseSolid;
