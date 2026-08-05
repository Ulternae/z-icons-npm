import React from 'react';

export function LanRecordVinylThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m128-256a128 128 0 1 0-256 0 128 128 0 1 0 256 0M256 144a112 112 0 1 1 0 224 112 112 0 1 1 0-224m0 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
  );
}

export default LanRecordVinylThin;
