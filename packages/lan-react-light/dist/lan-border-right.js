import React from 'react';

export function LanBorderRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M432 32c8.8 0 16 7.2 16 16v416c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16M288 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48M160 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48M32 88a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-208a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 80a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanBorderRight;
