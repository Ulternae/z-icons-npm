import React from 'react';

export function LanEllipsisHAltSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 256a16 16 0 1 0 32 0 16 16 0 1 0-32 0m80 0a64 64 0 1 1-128 0 64 64 0 1 1 128 0m112-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0 80a64 64 0 1 1 0-128 64 64 0 1 1 0 128m176-80a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0 80a64 64 0 1 1 0-128 64 64 0 1 1 0 128"})
  );
}

export default LanEllipsisHAltSolid;
