import React from 'react';

export function LanCircle0({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-352c-44.2 0-80 35.8-80 80v32c0 44.2 35.8 80 80 80s80-35.8 80-80v-32c0-44.2-35.8-80-80-80m-48 80c0-26.5 21.5-48 48-48s48 21.5 48 48v32c0 26.5-21.5 48-48 48s-48-21.5-48-48z"})
  );
}

export default LanCircle0;
