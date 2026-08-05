import React from 'react';

export function LanBullseyeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m0-408a152 152 0 1 1 0 304 152 152 0 1 1 0-304m0 320a168 168 0 1 0 0-336 168 168 0 1 0 0 336m-56-168a56 56 0 1 1 112 0 56 56 0 1 1-112 0m128 0a72 72 0 1 0-144 0 72 72 0 1 0 144 0"})
  );
}

export default LanBullseyeThin;
