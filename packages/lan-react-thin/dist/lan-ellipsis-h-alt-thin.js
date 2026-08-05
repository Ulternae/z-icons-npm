import React from 'react';

export function LanEllipsisHAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256a48 48 0 1 0 96 0 48 48 0 1 0-96 0m112 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m112-48a48 48 0 1 0 0 96 48 48 0 1 0 0-96m0 112a64 64 0 1 1 0-128 64 64 0 1 1 0 128m176-112a48 48 0 1 0 0 96 48 48 0 1 0 0-96m0 112a64 64 0 1 1 0-128 64 64 0 1 1 0 128"})
  );
}

export default LanEllipsisHAltThin;
