import React from 'react';

export const LanUnderlineSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 32C0 14.3 14.3 0 32 0h64c17.7 0 32 14.3 32 32s-14.3 32-32 32v160c0 53 43 96 96 96s96-43 96-96V64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32v160c0 88.4-71.6 160-160 160S32 312.4 32 224V64C14.3 64 0 49.7 0 32m0 448c0-17.7 14.3-32 32-32h320c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32"})
);

export default LanUnderlineSolid;
