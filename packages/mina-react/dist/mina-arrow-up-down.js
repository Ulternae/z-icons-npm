import React from 'react';

export function MinaArrowUpDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M7.5 17.5v-11m0 0L11 10M7.5 6.5 4 10m12.5-3.5v11m0 0L20 14m-3.5 3.5L13 14"})
  );
}

export default MinaArrowUpDown;
