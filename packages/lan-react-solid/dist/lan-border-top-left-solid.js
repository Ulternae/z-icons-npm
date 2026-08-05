import React from 'react';

export function LanBorderTopLeftSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 448c0 17.7 14.3 32 32 32s32-14.3 32-32V96h352c17.7 0 32-14.3 32-32s-14.3-32-32-32H64C28.7 32 0 60.7 0 96zm128 0c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32m128 0c0 17.7 14.3 32 32 32s32-14.3 32-32-14.3-32-32-32-32 14.3-32 32m160 32c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32m-32-288a32 32 0 1 0 64 0 32 32 0 1 0-64 0m32 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanBorderTopLeftSolid;
