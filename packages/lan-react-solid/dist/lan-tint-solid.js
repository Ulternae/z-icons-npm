import React from 'react';

export function LanTintSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -16 384 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 512C86 512 0 426 0 320 0 228.8 130.2 45.9 166.6-3.5c5.9-8 15.2-12.5 25.2-12.5h.4c10 0 19.3 4.5 25.2 12.5C253.8 45.9 384 228.8 384 320c0 106-86 192-192 192m-80-200c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 75.1 60.9 136 136 136 13.3 0 24-10.7 24-24s-10.7-24-24-24c-48.6 0-88-39.4-88-88"})
  );
}

export default LanTintSolid;
