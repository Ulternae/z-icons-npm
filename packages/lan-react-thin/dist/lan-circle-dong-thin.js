import React from 'react';

export function LanCircleDongThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m48-408v24h-72c-4.4 0-8 3.6-8 8s3.6 8 8 8h72v80c-14.6-19.4-37.8-32-64-32-44.2 0-80 35.8-80 80s35.8 80 80 80c26.2 0 49.4-12.6 64-32v24c0 4.4 3.6 8 8 8s8-3.6 8-8V144h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-24v-24c0-4.4-3.6-8-8-8s-8 3.6-8 8m-64 232a64 64 0 1 1 0-128 64 64 0 1 1 0 128m-96 72c0 4.4 3.6 8 8 8h208c4.4 0 8-3.6 8-8s-3.6-8-8-8H152c-4.4 0-8 3.6-8 8"})
  );
}

export default LanCircleDongThin;
