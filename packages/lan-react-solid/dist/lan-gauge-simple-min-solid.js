import React from 'react';

export function LanGaugeSimpleMinSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m320 96c0-35.3-28.7-64-64-64-14.5 0-27.8 4.8-38.5 12.9l-109.2-65.5c-11.4-6.8-26.1-3.1-32.9 8.2s-3.1 26.1 8.2 32.9L192.7 342c-.5 3.2-.8 6.6-.8 9.9 0 35.3 28.7 64 64 64s64-28.7 64-64z"})
  );
}

export default LanGaugeSimpleMinSolid;
