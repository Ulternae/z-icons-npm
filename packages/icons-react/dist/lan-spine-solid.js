import React from 'react';

export const LanSpineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 32C32 14.3 46.3 0 64 0h320c17.7 0 32 14.3 32 32 17.7 0 32 14.3 32 32s-14.3 32-32 32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32C14.3 96 0 81.7 0 64s14.3-32 32-32m0 176c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32v16c17.7 0 32 14.3 32 32s-14.3 32-32 32v16c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32v-16c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32 176h320c17.7 0 32 14.3 32 32 17.7 0 32 14.3 32 32s-14.3 32-32 32c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32-17.7 0-32-14.3-32-32s14.3-32 32-32c0-17.7 14.3-32 32-32"})
);

export default LanSpineSolid;
