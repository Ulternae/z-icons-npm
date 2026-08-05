import React from 'react';

export function MinaSunSnow({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M16 12a4 4 0 0 0-8 0m4-8.5V5m-7 7H3.5m17 0H19m-1-6-1 1M6 6l1 1m5.004 10.5L12 17m4.004-1.5L16 15m-7.996.5L8 15m4.004 6L12 20.5m4.004-1.5L16 18.5m-7.996.5L8 18.5"})
  );
}

export default MinaSunSnow;
