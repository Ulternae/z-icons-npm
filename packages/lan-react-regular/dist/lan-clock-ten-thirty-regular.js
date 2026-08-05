import React from 'react';

export function LanClockTenThirtyRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 256a208 208 0 1 1 416 0 208 208 0 1 1-416 0m464 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0M280 392V256c0-8-4-15.5-10.7-20l-96-64c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l85.3 56.8V392c0 13.3 10.7 24 24 24s24-10.7 24-24"})
  );
}

export default LanClockTenThirtyRegular;
