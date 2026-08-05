import React from 'react';

export function LanCircleHalfStrokeHorizontalSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 256a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-64 0c0-106-86-192-192-192S64 150 64 256z"})
  );
}

export default LanCircleHalfStrokeHorizontalSolid;
