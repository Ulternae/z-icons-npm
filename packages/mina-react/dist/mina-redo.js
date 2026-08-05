import React from 'react';

export function MinaRedo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M18.364 18.364A9 9 0 1 1 12 3c4.058 0 6.518 2.705 9 5.5"}), React.createElement("path", {"d":"M21 4.5v4h-4"})
  );
}

export default MinaRedo;
