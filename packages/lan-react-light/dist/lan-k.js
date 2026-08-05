import React from 'react';

export function LanK({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v416c0 8.8 7.2 16 16 16s16-7.2 16-16V342.6l94.1-94.1 165 225c5.2 7.1 15.2 8.7 22.4 3.4s8.7-15.2 3.4-22.4L149 225.6 315.3 59.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L32 297.4z"})
  );
}

export default LanK;
