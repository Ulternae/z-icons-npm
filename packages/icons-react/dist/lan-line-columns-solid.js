import React from 'react';

export const LanLineColumnsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64s14.3 32 32 32h128c17.7 0 32-14.3 32-32m0 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32M0 320c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32m192 128c0-17.7-14.3-32-32-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32m64-384c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-17.7 0-32 14.3-32 32m192 128c0-17.7-14.3-32-32-32H288c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32M256 320c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32s-14.3-32-32-32H288c-17.7 0-32 14.3-32 32m192 128c0-17.7-14.3-32-32-32H288c-17.7 0-32 14.3-32 32s14.3 32 32 32h128c17.7 0 32-14.3 32-32"})
);

export default LanLineColumnsSolid;
