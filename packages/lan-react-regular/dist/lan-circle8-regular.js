import React from 'react';

export function LanCircle8Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-300c0 14.7 4.6 28.2 12.5 39.3-12.7 12.3-20.5 29.6-20.5 48.7 0 37.6 30.4 68 68 68h40c37.6 0 68-30.4 68-68 0-19.1-7.9-36.3-20.5-48.7 7.9-11.1 12.5-24.7 12.5-39.3 0-37.6-30.4-68-68-68h-24c-37.6 0-68 30.4-68 68m112 0c0 11-9 20-20 20h-24c-11 0-20-9-20-20s9-20 20-20h24c11 0 20 9 20 20m-52 68h40c11 0 20 9 20 20s-9 20-20 20h-40c-11 0-20-9-20-20s9-20 20-20"})
  );
}

export default LanCircle8Regular;
