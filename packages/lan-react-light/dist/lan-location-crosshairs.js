import React from 'react';

export function LanLocationCrosshairs({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288-16c8.8 0 16 7.2 16 16v32.6C415 40.4 503.6 129 511.4 240H544c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32.6C503.6 383 415 471.6 304 479.4V512c0 8.8-7.2 16-16 16s-16-7.2-16-16v-32.6C161 471.6 72.4 383 64.6 272H32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32.6C72.4 129 161 40.4 272 32.6V0c0-8.8 7.2-16 16-16M96 256a192 192 0 1 0 384 0 192 192 0 1 0-384 0m112 0a80 80 0 1 0 160 0 80 80 0 1 0-160 0m80 112a112 112 0 1 1 0-224 112 112 0 1 1 0 224"})
  );
}

export default LanLocationCrosshairs;
