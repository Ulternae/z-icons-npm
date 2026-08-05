import React from 'react';

export function LanGaugeSimpleMedThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-208a48 48 0 1 1 0 96 48 48 0 1 1 0-96m0 112c35.3 0 64-28.7 64-64 0-32.6-24.4-59.6-56-63.5V80c0-4.4-3.6-8-8-8s-8 3.6-8 8v208.5c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64"})
  );
}

export default LanGaugeSimpleMedThin;
