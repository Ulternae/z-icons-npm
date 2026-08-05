import React from 'react';

export function MinaCornerUpLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M5 10.027h10a4 4 0 0 1 4 4V19M5 10.027l4.78 5.028M5 10.027 9.78 5"})
  );
}

export default MinaCornerUpLeft;
