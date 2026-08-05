import React from 'react';

export function LanUniversalAccessThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-24-368a24 24 0 1 1 48 0 24 24 0 1 1-48 0m64 0a40 40 0 1 0-80 0 40 40 0 1 0 80 0m-159.2 44.4c-2 4-.4 8.8 3.6 10.7l21.1 10.5c17.3 8.6 35.6 14.9 54.5 18.5v82.6l-31.6 102.9c-1.3 4.2 1.1 8.7 5.3 10s8.7-1.1 10-5.3l30.3-98.4h52.2l30.3 98.4c1.3 4.2 5.8 6.6 10 5.3s6.6-5.8 5.3-10l-31.6-102.9v-82.6c18.9-3.6 37.2-9.8 54.5-18.5l21.1-10.5c4-2 5.6-6.8 3.6-10.7s-6.8-5.6-10.7-3.6l-21.1 10.5c-27.1 13.6-57 20.6-87.4 20.6s-60.2-7.1-87.4-20.6l-21.1-10.5c-4-2-8.8-.4-10.7 3.6zm95.2 42.2c15.9 1.8 32.1 1.8 48 0V304h-48z"})
  );
}

export default LanUniversalAccessThin;
