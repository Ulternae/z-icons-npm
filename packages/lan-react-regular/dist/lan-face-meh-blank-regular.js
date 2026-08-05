import React from 'react';

export function LanFaceMehBlankRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 0 0 416 208 208 0 1 0 0-416m256 208a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-368-48a32 32 0 1 1 64 0 32 32 0 1 1-64 0m192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanFaceMehBlankRegular;
