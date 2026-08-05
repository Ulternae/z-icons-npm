import React from 'react';

export function LanClockEightThirty({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256a224 224 0 1 0 448 0 224 224 0 1 0-448 0m480 0a256 256 0 1 1-512 0 256 256 0 1 1 512 0M240 400V285.9l-71.1 47.4c-7.4 4.9-17.3 2.9-22.2-4.4s-2.9-17.3 4.4-22.2l96-64c4.9-3.3 11.2-3.6 16.4-.8s8.5 8.2 8.5 14.1v144c0 8.8-7.2 16-16 16s-16-7.2-16-16"})
  );
}

export default LanClockEightThirty;
