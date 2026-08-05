import React from 'react';

export function LanCircleO({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m72-256a72 72 0 1 1-144 0 72 72 0 1 1 144 0m-72-104a104 104 0 1 0 0 208 104 104 0 1 0 0-208"})
  );
}

export default LanCircleO;
