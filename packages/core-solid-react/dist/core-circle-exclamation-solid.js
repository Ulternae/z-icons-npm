import React from 'react';

export function CoreCircleExclamationSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-200a40 40 0 1 0 0 80 40 40 0 1 0 0-80m-24-184v144h48V128z"})
  );
}

export default CoreCircleExclamationSolid;
