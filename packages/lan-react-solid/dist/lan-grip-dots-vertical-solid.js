import React from 'react';

export function LanGripDotsVerticalSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 64A64 64 0 1 0 0 64a64 64 0 1 0 128 0m0 192a64 64 0 1 0-128 0 64 64 0 1 0 128 0M0 448c0 35.3 28.7 64 64 64s64-28.7 64-64-28.7-64-64-64-64 28.7-64 64M320 64a64 64 0 1 0-128 0 64 64 0 1 0 128 0M192 256a64 64 0 1 0 128 0 64 64 0 1 0-128 0m128 192c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64"})
  );
}

export default LanGripDotsVerticalSolid;
