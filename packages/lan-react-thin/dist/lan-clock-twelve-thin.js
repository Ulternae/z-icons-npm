import React from 'react';

export function LanClockTwelveThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-152v152c0 4.4-3.6 8-8 8s-8-3.6-8-8V104c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanClockTwelveThin;
