import React from 'react';

export function LanCircleOSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-72-256a72 72 0 1 0 144 0 72 72 0 1 0-144 0m72 120a120 120 0 1 1 0-240 120 120 0 1 1 0 240"})
  );
}

export default LanCircleOSolid;
