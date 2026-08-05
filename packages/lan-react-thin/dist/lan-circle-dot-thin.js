import React from 'react';

export function LanCircleDotThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m336 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0m-176 0a96 96 0 1 1 192 0 96 96 0 1 1-192 0"})
  );
}

export default LanCircleDotThin;
