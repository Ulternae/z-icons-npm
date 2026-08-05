import React from 'react';

export function LanCircleDotRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-464a208 208 0 1 0 0 416 208 208 0 1 0 0-416m0 304a96 96 0 1 1 0-192 96 96 0 1 1 0 192"})
  );
}

export default LanCircleDotRegular;
