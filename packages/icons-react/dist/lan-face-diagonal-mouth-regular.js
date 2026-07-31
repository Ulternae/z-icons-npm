import React from 'react';

export const LanFaceDiagonalMouthRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m358.1 79.2-184 48c-12.8 3.3-25.9-4.3-29.3-17.2s4.3-25.9 17.2-29.3l184-48c12.8-3.3 25.9 4.3 29.3 17.2s-4.3 25.9-17.2 29.3M144 208a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
);

export default LanFaceDiagonalMouthRegular;
