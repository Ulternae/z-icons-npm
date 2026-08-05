import React from 'react';

export function MinaCornerDownLeft({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M5 13.973h10a4 4 0 0 0 4-4V5M5 13.973l4.78-5.027M5 13.973 9.78 19"})
  );
}

export default MinaCornerDownLeft;
