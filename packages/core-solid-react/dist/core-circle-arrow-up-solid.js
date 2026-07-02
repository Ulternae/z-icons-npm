import React from 'react';

export function CoreCircleArrowUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m17-369c-9.4-9.4-24.6-9.4-33.9 0l-112 112 33.9 33.9 71-71V384h48V217.9l71 71 33.9-33.9-112-112z"})
  );
}

export default CoreCircleArrowUpSolid;
