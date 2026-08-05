import React from 'react';

export function LanCircleEurozoneThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M136 160c-4.4 0-8 3.6-8 8v176c0 4.4 3.6 8 8 8h81.6c4.4 0 8-3.6 8-8s-3.6-8-8-8H144v-68.8h64c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64V176h72c4.4 0 8-3.6 8-8s-3.6-8-8-8zm144 0c-4.4 0-8 3.6-8 8s3.6 8 8 8h82.5L273 340.2c-1.4 2.5-1.3 5.5.1 7.9s4.1 3.9 6.9 3.9h96c4.4 0 8-3.6 8-8s-3.6-8-8-8h-82.5L383 171.8c1.4-2.5 1.3-5.5-.1-7.9s-4.1-3.9-6.9-3.9z"})
  );
}

export default LanCircleEurozoneThin;
