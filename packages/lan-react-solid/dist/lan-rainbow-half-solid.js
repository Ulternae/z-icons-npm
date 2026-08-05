import React from 'react';

export function LanRainbowHalfSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 64C235.9 64 64 235.9 64 448c0 17.7-14.3 32-32 32S0 465.7 0 448C0 200.6 200.6 0 448 0c17.7 0 32 14.3 32 32s-14.3 32-32 32m0 128c-141.4 0-256 114.6-256 256 0 17.7-14.3 32-32 32s-32-14.3-32-32c0-176.7 143.3-320 320-320 17.7 0 32 14.3 32 32s-14.3 32-32 32M320 448c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-106 86-192 192-192 17.7 0 32 14.3 32 32s-14.3 32-32 32c-70.7 0-128 57.3-128 128"})
  );
}

export default LanRainbowHalfSolid;
