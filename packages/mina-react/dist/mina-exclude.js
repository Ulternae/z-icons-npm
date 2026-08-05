import React from 'react';

export function MinaExclude({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M8.4 15.6H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6.6a3 3 0 0 1 3 3v2.4m-7.2 7.2V18a3 3 0 0 0 3 3H18a3 3 0 0 0 3-3v-6.6a3 3 0 0 0-3-3h-2.4m-7.2 7.2v-1.8m0 1.8h1.8m5.4-7.2h-1.8m1.8 0v1.8m-7.2 0a1.8 1.8 0 0 1 1.8-1.8m5.4 5.4a1.8 1.8 0 0 1-1.8 1.8"})
  );
}

export default MinaExclude;
