import React from 'react';

export function LanBorderTopSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64m64 128a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M64 320a32 32 0 1 1-64 0 32 32 0 1 1 64 0m320 0a32 32 0 1 1 64 0 32 32 0 1 1-64 0M0 448c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m448 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m-320 0c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m192 0c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32"})
  );
}

export default LanBorderTopSolid;
