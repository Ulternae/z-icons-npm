import React from 'react';

export const LanCrosshairsSimpleSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M445.3 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32h61.3c-13.4 80.4-76.9 143.9-157.3 157.3V384c0-17.7-14.3-32-32-32s-32 14.3-32 32v61.3C143.6 431.9 80.1 368.4 66.7 288H128c17.7 0 32-14.3 32-32s-14.3-32-32-32H66.7C80.1 143.6 143.6 80.1 224 66.7V128c0 17.7 14.3 32 32 32s32-14.3 32-32V66.7c80.4 13.4 143.9 76.9 157.3 157.3M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0"})
);

export default LanCrosshairsSimpleSolid;
