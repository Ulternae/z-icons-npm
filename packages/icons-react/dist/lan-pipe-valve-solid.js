import React from 'react';

export const LanPipeValveSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32c17.7 0 32 14.3 32 32h64c17.7 0 32 14.3 32 32s-14.3 32-32 32h-64v64h160c0-17.7 14.3-32 32-32s32 14.3 32 32v256c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32S0 465.7 0 448V192c0-17.7 14.3-32 32-32s32 14.3 32 32h160v-64h-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64c0-17.7 14.3-32 32-32"})
);

export default LanPipeValveSolid;
