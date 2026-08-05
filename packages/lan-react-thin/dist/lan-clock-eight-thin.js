import React from 'react';

export function LanClockEightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M496 256a240 240 0 1 0-480 0 240 240 0 1 0 480 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m264-152v152c0 2.7-1.3 5.2-3.6 6.7l-96 64c-3.7 2.5-8.6 1.5-11.1-2.2s-1.5-8.6 2.2-11.1l92.5-61.7V104c0-4.4 3.6-8 8-8s8 3.6 8 8"})
  );
}

export default LanClockEightThin;
