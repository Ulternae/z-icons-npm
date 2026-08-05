import React from 'react';

export function LanClockEightThirtySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512m-24 392v-91.2l-58.7 39.1c-11 7.4-25.9 4.4-33.3-6.7s-4.4-25.9 6.7-33.3l96-64c7.4-4.9 16.8-5.4 24.6-1.2S280 247.1 280 256v136c0 13.3-10.7 24-24 24s-24-10.7-24-24"})
  );
}

export default LanClockEightThirtySolid;
