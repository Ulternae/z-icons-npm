import React from 'react';

export function CoreCircleExclamation({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement('path', {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m0 328a40 40 0 1 1 0-80 40 40 0 1 1 0 80m28-120h-56V128h56z"})
  );
}

export default CoreCircleExclamation;
