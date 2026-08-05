import React from 'react';

export function MinaDoorClosed({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M6.167 20.5v-15a2 2 0 0 1 2-2h7.666c1.105 0 2 .892 2 1.997V20.5M3.5 20.5h17M15 13v-2"})
  );
}

export default MinaDoorClosed;
