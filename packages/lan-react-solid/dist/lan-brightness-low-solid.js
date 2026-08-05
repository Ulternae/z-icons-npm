import React from 'react';

export function LanBrightnessLowSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 80a32 32 0 1 1 64 0 32 32 0 1 1-64 0m-64 176a96 96 0 1 1 192 0 96 96 0 1 1-192 0m96 144a32 32 0 1 1 0 64 32 32 0 1 1 0-64m176-176a32 32 0 1 1 0 64 32 32 0 1 1 0-64M80 256a32 32 0 1 1-64 0 32 32 0 1 1 64 0M64 128a32 32 0 1 1 64 0 32 32 0 1 1-64 0m256 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m0-256a32 32 0 1 1 64 0 32 32 0 1 1-64 0M128 384a32 32 0 1 1-64 0 32 32 0 1 1 64 0"})
  );
}

export default LanBrightnessLowSolid;
