import React from 'react';

export function LanGripDotsVerticalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 64a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0 176a48 48 0 1 1 0-96 48 48 0 1 1 0 96m64-48a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-64 144c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48m64 48c0-35.3-28.7-64-64-64s-64 28.7-64 64 28.7 64 64 64 64-28.7 64-64M64 400c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48m64 48c0-35.3-28.7-64-64-64S0 412.7 0 448s28.7 64 64 64 64-28.7 64-64M16 256a48 48 0 1 1 96 0 48 48 0 1 1-96 0m48 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128m0-208a48 48 0 1 1 0-96 48 48 0 1 1 0 96m64-48A64 64 0 1 0 0 64a64 64 0 1 0 128 0"})
  );
}

export default LanGripDotsVerticalThin;
