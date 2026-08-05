import React from 'react';

export function LanGaugeSimpleMaxThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 496a240 240 0 1 0 0-480 240 240 0 1 0 0 480m0-496a256 256 0 1 1 0 512 256 256 0 1 1 0-512m0 400a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0 16c-35.3 0-64-28.7-64-64s28.7-64 64-64c18.8 0 35.7 8.1 47.4 21l108-75.6c3.6-2.5 8.6-1.7 11.1 2s1.7 8.6-2 11.1l-108 75.6c4.7 8.9 7.4 19.1 7.4 29.9 0 35.3-28.7 64-64 64z"})
  );
}

export default LanGaugeSimpleMaxThin;
