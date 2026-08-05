import React from 'react';

export function LanMoonNewInverseThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-496a240 240 0 1 0 0 480 240 240 0 1 0 0-480"})
  );
}

export default LanMoonNewInverseThin;
