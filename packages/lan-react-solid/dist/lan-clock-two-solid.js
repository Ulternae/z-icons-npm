import React from 'react';

export function LanClockTwoSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m24-392v91.2l58.7-39.1c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3l-96 64c-7.4 4.9-16.8 5.4-24.6 1.2S232 264.9 232 256V120c0-13.3 10.7-24 24-24s24 10.7 24 24"})
  );
}

export default LanClockTwoSolid;
