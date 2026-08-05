import React from 'react';

export function MinaCornerLeftUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M10.027 5v10a4 4 0 0 0 4 4H19M10.027 5l5.028 4.78M10.027 5 5 9.78"})
  );
}

export default MinaCornerLeftUp;
