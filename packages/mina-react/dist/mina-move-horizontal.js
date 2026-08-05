import React from 'react';

export function MinaMoveHorizontal({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m18 8 4 4m0 0-4 4m4-4H2m4-4-4 4m0 0 4 4"})
  );
}

export default MinaMoveHorizontal;
