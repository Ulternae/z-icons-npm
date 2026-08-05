import React from 'react';

export function LanPipeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 64 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 0c17.7 0 32 14.3 32 32v448c0 17.7-14.3 32-32 32S0 497.7 0 480V32C0 14.3 14.3 0 32 0"})
  );
}

export default LanPipeSolid;
