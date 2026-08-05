import React from 'react';

export function LanCircleJ({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m64-336c0-8.8-7.2-16-16-16s-16 7.2-16 16v104c0 22.1-17.9 40-40 40s-40-17.9-40-40v-8c0-8.8-7.2-16-16-16s-16 7.2-16 16v8c0 39.8 32.2 72 72 72s72-32.2 72-72z"})
  );
}

export default LanCircleJ;
