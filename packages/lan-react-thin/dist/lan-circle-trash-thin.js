import React from 'react';

export function LanCircleTrashThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-83.5-156c2 16 15.6 28 31.8 28h103.5c16.1 0 29.8-12 31.8-28l14.5-116H338l-14.2 114c-1 8-7.8 14-15.9 14H204.4c-8.1 0-14.9-6-15.9-14l-14.2-114h-16.1l14.5 116zM128 184c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8s-3.6-8-8-8h-51.1l-17.4-34.7c-4.1-8.1-12.4-13.3-21.5-13.3h-60.2c-9.1 0-17.4 5.1-21.5 13.3L187.1 176H136c-4.4 0-8 3.6-8 8m179.1-8H205l13.8-27.6c1.4-2.7 4.1-4.4 7.2-4.4h60.2c3 0 5.8 1.7 7.2 4.4z"})
  );
}

export default LanCircleTrashThin;
