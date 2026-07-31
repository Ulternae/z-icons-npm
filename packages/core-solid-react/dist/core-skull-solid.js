import React from 'react';

export function CoreSkullSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 309.5V256C0 114.6 114.6 0 256 0s256 114.6 256 256v53.5c0 17-6.7 33.3-18.7 45.3L448 400v48c0 35.3-28.7 64-64 64h-40v-80h-48v80h-80v-80h-48v80h-40c-35.3 0-64-28.7-64-64v-48l-45.3-45.3C6.7 342.7 0 326.5 0 309.5M224 240a48 48 0 1 0-96 0 48 48 0 1 0 96 0m112 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96"})
  );
}

export default CoreSkullSolid;
