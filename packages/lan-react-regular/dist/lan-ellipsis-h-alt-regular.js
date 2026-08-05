import React from 'react';

export function LanEllipsisHAltRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56 256a24 24 0 1 0 48 0 24 24 0 1 0-48 0m88 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m112-24a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 88a64 64 0 1 1 0-128 64 64 0 1 1 0 128m176-88a24 24 0 1 0 0 48 24 24 0 1 0 0-48m0 88a64 64 0 1 1 0-128 64 64 0 1 1 0 128"})
  );
}

export default LanEllipsisHAltRegular;
