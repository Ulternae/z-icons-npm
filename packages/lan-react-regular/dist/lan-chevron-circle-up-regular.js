import React from 'react';

export function LanChevronCircleUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m0 464a256 256 0 1 0 0-512 256 256 0 1 0 0 512m121-241L273 167c-9.4-9.4-24.6-9.4-33.9 0L135 271c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l87-87 87 87c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9z"})
  );
}

export default LanChevronCircleUpRegular;
