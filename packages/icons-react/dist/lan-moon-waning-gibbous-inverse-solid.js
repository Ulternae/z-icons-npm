import React from 'react';

export const LanMoonWaningGibbousInverseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448c-13.2 0-26 1.3-38.5 3.8C279.2 107.7 320 177.1 320 256s-40.8 148.2-102.5 188.1c12.4 2.5 25.3 3.9 38.5 3.9 106 0 192-86 192-192S362 64 256 64"})
);

export default LanMoonWaningGibbousInverseSolid;
