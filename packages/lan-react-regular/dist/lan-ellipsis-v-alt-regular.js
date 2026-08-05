import React from 'react';

export function LanEllipsisVAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 128 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 88a64 64 0 1 1 0-128 64 64 0 1 1 0 128m24 112c0-13.3-10.7-24-24-24s-24 10.7-24 24 10.7 24 24 24 24-10.7 24-24m40 0c0 35.3-28.7 64-64 64S0 291.3 0 256s28.7-64 64-64 64 28.7 64 64M88 432c0-13.3-10.7-24-24-24s-24 10.7-24 24 10.7 24 24 24 24-10.7 24-24m40 0c0 35.3-28.7 64-64 64S0 467.3 0 432s28.7-64 64-64 64 28.7 64 64"})
  );
}

export default LanEllipsisVAltRegular;
