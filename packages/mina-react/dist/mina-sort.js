import React from 'react';

export function MinaSort({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M4.5 7h15m-15 5h10m-10 5h4"})
  );
}

export default MinaSort;
