import React from 'react';

export const LanMoonWaningCrescentInverseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m38.5-444.2C232.8 107.7 192 177.1 192 256s40.8 148.2 102.5 188.1C382.1 426.3 448 348.9 448 256S382.1 85.7 294.5 67.8"})
);

export default LanMoonWaningCrescentInverseSolid;
