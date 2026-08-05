import React from 'react';

export function LanUTurnLeftUpSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 512c-114.9 0-208-93.1-208-208V176H48c-12.9 0-24.6-7.8-29.6-19.7s-2.2-25.7 6.9-34.9l112-112 2.4-2.2c12.6-10.2 31.1-9.5 42.8 2.2l112 112c9.2 9.2 11.9 22.9 6.9 34.9S284.9 176 272 176h-48v128c0 44.2 35.8 80 80 80s80-35.8 80-80V96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v208c0 114.9-93.1 208-208 208"})
  );
}

export default LanUTurnLeftUpSolid;
