import React from 'react';

export function LanSirenOnSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m69.3 36 48 32c11 7.4 14 22.3 6.7 33.3s-22.3 14-33.3 6.7l-48-32c-11-7.4-14-22.3-6.7-33.3s22.3-14 33.3-6.7m528 40-48 32c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l48-32c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3M24 192h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24m528 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24M144 304l25.4-215.5c3.7-32.2 31.1-56.5 63.5-56.5h174.2c32.5 0 59.8 24.3 63.6 56.5L496 304H258.3l13.6-149.8c1.2-13.2-8.5-24.9-21.7-26.1s-24.9 8.5-26.1 21.7l-14 154.2zm-48 80c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32z"})
  );
}

export default LanSirenOnSolid;
