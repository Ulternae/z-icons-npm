import React from 'react';

export function LanFaceFrownSlight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m190.6 123.3c-6.2 6.3-16.3 6.3-22.6.1s-6.3-16.3-.1-22.6c22.5-22.7 53.6-36.8 88.1-36.8s65.6 14.1 88.1 36.7c6.2 6.3 6.2 16.4-.1 22.6s-16.4 6.2-22.6-.1C304.7 362.4 281.6 352 256 352s-48.7 10.4-65.4 27.3M152 208a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanFaceFrownSlight;
