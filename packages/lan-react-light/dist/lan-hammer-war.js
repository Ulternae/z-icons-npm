import React from 'react';

export function LanHammerWar({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 0c8.8 0 16 7.2 16 16v45.7l171.5-24.5c19.3-2.7 36.5 12.2 36.5 31.7v198.2c0 19.5-17.2 34.4-36.5 31.7L240 274.3V528c0 8.8-7.2 16-16 16s-16-7.2-16-16V274.3L36.5 298.8C17.2 301.5 0 286.6 0 267.1V68.9c0-19.5 17.2-34.4 36.5-31.7L208 61.7V16c0-8.8 7.2-16 16-16m192 267.1V68.9L228.5 95.7c-3 .4-6 .4-9.1 0L32 68.9v198.2l187.5-26.8c3-.4 6-.4 9.1 0z"})
  );
}

export default LanHammerWar;
