import React from 'react';

export function LanDropletPercentSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 384 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 512C86 512 0 426 0 320 0 228.8 130.2 45.9 166.6-3.5c5.9-8 15.2-12.5 25.2-12.5h.4c10 0 19.3 4.5 25.2 12.5C253.8 45.9 384 228.8 384 320c0 106-86 192-192 192m-56-224a24 24 0 1 0 0-48 24 24 0 1 0 0 48m95-41L119 359c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L265 281c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0zm41 129a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanDropletPercentSolid;
