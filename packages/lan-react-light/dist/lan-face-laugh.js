import React from 'react';

export function LanFaceLaugh({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 0-448 0 224 224 0 1 0 448 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m256 144c53.7 0 99.7-33.1 118.7-80H137.3c19 46.9 65 80 118.7 80M123.3 288h265.4c14.2 0 25.4 12.3 21.7 26-18.5 68-80.6 118-154.4 118s-136-50-154.4-118c-3.7-13.7 7.5-26 21.7-26m28.7-96a24 24 0 1 1 48 0 24 24 0 1 1-48 0m184-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanFaceLaugh;
