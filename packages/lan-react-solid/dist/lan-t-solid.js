import React from 'react';

export function LanTSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h128v352c0 17.7 14.3 32 32 32s32-14.3 32-32V96h128c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
  );
}

export default LanTSolid;
