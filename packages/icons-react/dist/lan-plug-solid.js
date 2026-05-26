import React from 'react';

export const LanPlugSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M128-32c17.7 0 32 14.3 32 32v96h128V0c0-17.7 14.3-32 32-32s32 14.3 32 32v96h64c17.7 0 32 14.3 32 32s-14.3 32-32 32v64c0 95.1-69.2 174.1-160 189.3V480c0 17.7-14.3 32-32 32s-32-14.3-32-32v-66.7C101.2 398.1 32 319.1 32 224v-64c-17.7 0-32-14.3-32-32s14.3-32 32-32h64V0c0-17.7 14.3-32 32-32"})
);

export default LanPlugSolid;
