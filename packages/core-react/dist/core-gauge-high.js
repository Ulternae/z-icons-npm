import React from 'react';

export function CoreGaugeHigh({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512m0-448a192 192 0 1 0 0 384 192 192 0 1 0 0-384m121 108.5-70.3 140.6C315 323.9 320 337.3 320 352c0 35.3-28.7 64-64 64s-64-28.7-64-64 28.7-64 64-64h.7L327 147.5zM128 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64m259-63.9c16.3 1.5 29 15.2 29 31.9 0 17.7-14.3 32-32 32-9.4 0-17.8-4.1-23.7-10.5zM160 192a32 32 0 1 1 0-64 32 32 0 1 1 0 64m96-32a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
  );
}

export default CoreGaugeHigh;
