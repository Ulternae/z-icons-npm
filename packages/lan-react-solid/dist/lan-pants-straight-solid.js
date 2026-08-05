import React from 'react';

export function LanPantsStraightSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M414.4 0H34.5C16 0 1.4 15.6 2.6 34l1.9 30h100c13.3 0 24 10.7 24 24s-10.7 24-24 24h-97l23.1 370c1.1 16.9 15 30 31.9 30h105.9c17.7 0 32-14.3 32-32V216c0-13.3 10.7-24 24-24s24 10.7 24 24v264c0 17.7 14.3 32 32 32h105.9c16.9 0 30.9-13.1 31.9-30l23.1-370h-97c-13.3 0-24-10.7-24-24s10.7-24 24-24h100l1.9-30c1.2-18.4-13.5-34-31.9-34z"})
  );
}

export default LanPantsStraightSolid;
