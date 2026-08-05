import React from 'react';

export function LanMoonLastQuarterInverseSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-64c106 0 192-86 192-192S362 64 256 64z"})
  );
}

export default LanMoonLastQuarterInverseSolid;
