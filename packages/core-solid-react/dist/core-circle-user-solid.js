import React from 'react';

export function CoreCircleUserSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-176c-53.2 0-101.8 20-138.6 52.9C152.3 425.3 201.5 448 256 448s103.7-22.7 138.6-59.1C357.8 356 309.2 336 256 336m0-216a72 72 0 1 0 0 144 72 72 0 1 0 0-144"})
  );
}

export default CoreCircleUserSolid;
