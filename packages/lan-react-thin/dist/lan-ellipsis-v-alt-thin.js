import React from 'react';

export function LanEllipsisVAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 128 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32a48 48 0 1 0 0 96 48 48 0 1 0 0-96m0 112a64 64 0 1 1 0-128 64 64 0 1 1 0 128m48 112c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48m16 0c0 35.3-28.7 64-64 64S0 291.3 0 256s28.7-64 64-64 64 28.7 64 64m-16 176c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48m16 0c0 35.3-28.7 64-64 64S0 467.3 0 432s28.7-64 64-64 64 28.7 64 64"})
  );
}

export default LanEllipsisVAltThin;
