import React from 'react';

export function CoreCircleArrowDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m28 220.4 64.2-64.2 39.6 39.6-112 112c-10.9 10.9-28.7 10.9-39.6 0l-112-112 39.6-39.6 64.2 64.2V128h56z"})
  );
}

export default CoreCircleArrowDown;
