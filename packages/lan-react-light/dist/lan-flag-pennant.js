import React from 'react';

export function LanFlagPennant({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 16c0-8.8-7.2-16-16-16S0 7.2 0 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16V350.9l400.9-137.7c9.1-3.1 15.1-11.6 15.1-21.2s-6.1-18.1-15.1-21.2L32 33.1zm0 50.9L396.1 192 32 317.1z"})
  );
}

export default LanFlagPennant;
