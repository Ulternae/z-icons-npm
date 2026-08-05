import React from 'react';

export function LanClockOneThirtyThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M264 408V258.4l62.7-94c2.5-3.7 1.5-8.6-2.2-11.1s-8.6-1.5-11.1 2.2l-64 96c-.9 1.3-1.3 2.9-1.3 4.4v152c0 4.4 3.6 8 8 8s8-3.6 8-8z"})
  );
}

export default LanClockOneThirtyThin;
