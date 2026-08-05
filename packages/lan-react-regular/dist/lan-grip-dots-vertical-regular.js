import React from 'react';

export function LanGripDotsVerticalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m64-24A64 64 0 1 1 0 64a64 64 0 1 1 128 0M64 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48m64-24a64 64 0 1 1-128 0 64 64 0 1 1 128 0M40 448c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24m24-64c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64M256 88a24 24 0 1 0 0-48 24 24 0 1 0 0 48m64-24a64 64 0 1 1-128 0 64 64 0 1 1 128 0m-88 192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m24 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128m0 152c13.3 0 24-10.7 24-24s-10.7-24-24-24-24 10.7-24 24 10.7 24 24 24m-64-24c0-35.3 28.7-64 64-64s64 28.7 64 64-28.7 64-64 64-64-28.7-64-64"})
  );
}

export default LanGripDotsVerticalRegular;
