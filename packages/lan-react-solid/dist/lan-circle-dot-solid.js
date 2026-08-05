import React from 'react';

export function LanCircleDotSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-352a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
  );
}

export default LanCircleDotSolid;
