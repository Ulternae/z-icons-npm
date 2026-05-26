import React from 'react';

export const LanGripDotsVertical = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 160a32 32 0 1 1 0-64 32 32 0 1 1 0 64m64-32a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64 160c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m64 32c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64M64 416c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m64 32c0-35.3-28.7-64-64-64S0 412.7 0 448s28.7 64 64 64 64-28.7 64-64M32 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m32 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-224a32 32 0 1 1 0-64 32 32 0 1 1 0 64m64-32A64 64 0 1 0 0 64a64 64 0 1 0 128 0"})
);

export default LanGripDotsVertical;
