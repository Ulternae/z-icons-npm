import React from 'react';

export function LanCircleGuaraniThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-8-392v16.3c-62.5 4.1-112 56.2-112 119.7s49.5 115.6 112 119.7V392c0 4.4 3.6 8 8 8s8-3.6 8-8v-16.3c62.5-4.1 112-56.2 112-119.7 0-4.4-3.6-8-8-8H264v-95.7c25.2 1.9 47.8 12.8 64.8 29.4 3.2 3.1 8.2 3 11.3-.1s3-8.2-.1-11.3c-19.9-19.5-46.5-32.1-76-34V120c0-4.4-3.6-8-8-8s-8 3.6-8 8m-96 136c0-54.7 42.3-99.6 96-103.7v207.4c-53.7-4.1-96-49-96-103.7m207.7 8c-3.9 51.1-44.6 91.8-95.7 95.7V264z"})
  );
}

export default LanCircleGuaraniThin;
