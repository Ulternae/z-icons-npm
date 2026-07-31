import React from 'react';

export function CoreUniversalAccessSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512M136 200v48h56v160h48v-68h32v68h48V248h56v-48zM256 88a40 40 0 1 0 0 80 40 40 0 1 0 0-80"})
  );
}

export default CoreUniversalAccessSolid;
