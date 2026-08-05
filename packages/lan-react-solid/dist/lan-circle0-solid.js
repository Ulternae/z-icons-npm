import React from 'react';

export function LanCircle0Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-368c53 0 96 43 96 96v32c0 53-43 96-96 96s-96-43-96-96v-32c0-53 43-96 96-96m-48 96v32c0 26.5 21.5 48 48 48s48-21.5 48-48v-32c0-26.5-21.5-48-48-48s-48 21.5-48 48"})
  );
}

export default LanCircle0Solid;
