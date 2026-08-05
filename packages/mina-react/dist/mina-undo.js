import React from 'react';

export function MinaUndo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M5.636 18.364A9 9 0 1 0 12 3C7.942 3 5.482 5.705 3 8.5"}), React.createElement("path", {"d":"M3 4.5v4h4"})
  );
}

export default MinaUndo;
