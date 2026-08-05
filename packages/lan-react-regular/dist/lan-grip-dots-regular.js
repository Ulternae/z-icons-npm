import React from 'react';

export function LanGripDotsRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 184a24 24 0 1 1 0-48 24 24 0 1 1 0 48m64-24a64 64 0 1 0-128 0 64 64 0 1 0 128 0m152 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m216 64a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m24 256a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128m-192 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48m64-24a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-232 0a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-24-64a64 64 0 1 0 0 128 64 64 0 1 0 0-128"})
  );
}

export default LanGripDotsRegular;
