import React from 'react';

export function LanClockTenThirty({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 256a224 224 0 1 1 448 0 224 224 0 1 1-448 0m480 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M272 400V256c0-5.3-2.7-10.3-7.1-13.3l-96-64c-7.4-4.9-17.3-2.9-22.2 4.4s-2.9 17.3 4.4 22.2l88.9 59.3V400c0 8.8 7.2 16 16 16s16-7.2 16-16"})
  );
}

export default LanClockTenThirty;
