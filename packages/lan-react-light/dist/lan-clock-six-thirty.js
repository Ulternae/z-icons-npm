import React from 'react';

export function LanClockSixThirty({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M272 400V256c0-8.8-7.2-16-16-16s-16 7.2-16 16v144c0 8.8 7.2 16 16 16s16-7.2 16-16"})
  );
}

export default LanClockSixThirty;
