import React from 'react';

export function LanCircleRubleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-80-368c0-13.3 10.7-24 24-24h80c48.6 0 88 39.4 88 88s-39.4 88-88 88h-56v24h56c8.8 0 16 7.2 16 16s-7.2 16-16 16h-56v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24v-40h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24zm104 104c22.1 0 40-17.9 40-40s-17.9-40-40-40h-56v80z"})
  );
}

export default LanCircleRubleSolid;
