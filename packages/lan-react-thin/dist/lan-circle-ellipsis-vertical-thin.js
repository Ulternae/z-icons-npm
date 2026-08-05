import React from 'react';

export function LanCircleEllipsisVerticalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-16-80a16 16 0 1 1 32 0 16 16 0 1 1-32 0m16 176a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
  );
}

export default LanCircleEllipsisVerticalThin;
