import React from 'react';

export function LanIntegralSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 64c-17.7 0-32 14.3-32 32v320c0 53-43 96-96 96S0 469 0 416c0-17.7 14.3-32 32-32s32 14.3 32 32 14.3 32 32 32 32-14.3 32-32V96c0-53 43-96 96-96s96 43 96 96c0 17.7-14.3 32-32 32s-32-14.3-32-32-14.3-32-32-32"})
  );
}

export default LanIntegralSolid;
