import React from 'react';

export function LanChevronCircleLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M276.7 132.7l-112 112c-6.2 6.2-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L198.6 256l100.7-100.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0"})
  );
}

export default LanChevronCircleLeft;
