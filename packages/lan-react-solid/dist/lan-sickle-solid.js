import React from 'react';

export function LanSickleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M213.2 340.7 181.5 309c-33.9-33.9-53-80-53-128 0-100 81-181 181-181h11c90.1 0 165.8 62.1 186.4 145.8 1.8 7.3-4 14.2-11.5 14.2-3.9 0-7.5-1.9-9.9-4.9-26.1-32.2-65.4-51.1-107.1-51.1-76.1 0-137.8 61.7-137.8 137.8v9.8c0 20.7 5.2 39.7 12.2 58.6 2.2 6 .9 12.8-3.7 17.3l-13.2 13.2c-6.2 6.2-16.4 6.2-22.6 0zM121.5 311l80 80c9.4 9.4 9.4 24.6 0 33.9l-16 16c-9.4 9.4-24.6 9.4-33.9 0l-7-7-71 71c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l71-71-7-7c-9.4-9.4-9.4-24.6 0-33.9l16-16c9.4-9.4 24.6-9.4 33.9 0z"})
  );
}

export default LanSickleSolid;
