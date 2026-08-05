import React from 'react';

export function MinaArrowUpRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m6.5 17.5 11-11m0 0h-9m9 0v9"})
  );
}

export default MinaArrowUpRight;
