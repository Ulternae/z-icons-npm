import React from 'react';

export function LanPipeSectionSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 96c17.7 0 32 14.3 32 32h512c0-17.7 14.3-32 32-32s32 14.3 32 32v256c0 17.7-14.3 32-32 32s-32-14.3-32-32H64c0 17.7-14.3 32-32 32S0 401.7 0 384V128c0-17.7 14.3-32 32-32"})
  );
}

export default LanPipeSectionSolid;
