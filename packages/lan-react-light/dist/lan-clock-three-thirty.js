import React from 'react';

export function LanClockThreeThirty({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256a224 224 0 1 0 448 0 224 224 0 1 0-448 0m480 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M240 400V256c0-8.8 7.2-16 16-16h112c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96v128c0 8.8-7.2 16-16 16s-16-7.2-16-16"})
  );
}

export default LanClockThreeThirty;
