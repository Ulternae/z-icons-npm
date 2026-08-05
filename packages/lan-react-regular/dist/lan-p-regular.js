import React from 'react';

export function LanPRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h144c83.9 0 152 68.1 152 152s-68.1 152-152 152H48v120c0 13.3-10.7 24-24 24S0 469.3 0 456zm48 232h120c57.4 0 104-46.6 104-104S225.4 80 168 80H48z"})
  );
}

export default LanPRegular;
