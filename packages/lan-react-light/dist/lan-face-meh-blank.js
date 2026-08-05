import React from 'react';

export function LanFaceMehBlank({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 0 0 448 224 224 0 1 0 0-448m256 224a256 256 0 1 1-512 0 256 256 0 1 1 512 0m-360-48a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanFaceMehBlank;
