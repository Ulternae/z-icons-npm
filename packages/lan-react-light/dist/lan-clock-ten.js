import React from 'react';

export function LanClockTen({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M480 256a224 224 0 1 1-448 0 224 224 0 1 1 448 0M0 256a256 256 0 1 0 512 0 256 256 0 1 0-512 0m240-144v114.1l-71.1-47.4c-7.4-4.9-17.3-2.9-22.2 4.4s-2.9 17.3 4.4 22.2l96 64c4.9 3.3 11.2 3.6 16.4.8s8.5-8.2 8.5-14.1V112c0-8.8-7.2-16-16-16s-16 7.2-16 16"})
  );
}

export default LanClockTen;
