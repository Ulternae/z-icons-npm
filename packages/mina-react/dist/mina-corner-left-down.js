import React from 'react';

export function MinaCornerLeftDown({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M10.027 19V9a4 4 0 0 1 4-4H19m-8.973 14 5.028-4.78M10.027 19 5 14.22"})
  );
}

export default MinaCornerLeftDown;
